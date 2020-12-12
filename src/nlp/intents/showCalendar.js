const _ = require('lodash');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const logger = require('logger');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.calendar';
const intentThreshold = parseFloat(process.env.SHOW_CALENDAR_THRESHOLD || 0.8);

const getCalendarUrl = yyyymmString => {
    logger.info('getCalenderUrl');
    const doc = new GoogleSpreadsheet(process.env.CALENDAR_SPREADSHEET_KEY);
    return doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    }).then(() => {
        logger.info('Authenticated with calendar spreadsheet');
        return doc.loadInfo().then(() => {
            const calendarWorksheet = doc.sheetsByIndex[0];
            logger.info(`Spreadsheet info loaded: ${calendarWorksheet.title}`);
            return calendarWorksheet.getRows().then(rows => {
                for (let i=0;i<rows.length;i++) {
                    logger.info(rows[i]['YYYY-MM']);
                    logger.info(rows[i]['Link']);
                    if (rows[i]['YYYY-MM'] === yyyymmString) {
                        return rows[i]['Link'];
                    }
                }
                return null;
            });
        });
    });
};

const getCalendarUrlForToday = () => {
    const today = new Date(Date.now());
    const year = today.getUTCFullYear();
    const month = getMonthAsTwoDigitString(today.getUTCMonth());
    const yyyymmString = `${year}-${month}`;
    return getCalendarUrl(yyyymmString);
};

const getDateForEntity = (entity, today) => {
    const entityType = _.get(entity, 'resolution.type');
    let timex = null;
    switch (entityType) {
        case 'interval':
            /*
                "show January Calendar" 
                resolution:
                { type: 'interval',
                    timex: 'XXXX-01',
                    strPastStartValue: '2020-01-01',
                    pastStartDate: 2020-01-01T00:00:00.000Z,
                    strPastEndValue: '2020-02-01',
                    pastEndDate: 2020-02-01T00:00:00.000Z,
                    strFutureStartValue: '2021-01-01',
                    futureStartDate: 2021-01-01T00:00:00.000Z,
                    strFutureEndValue: '2021-02-01',
                    futureEndDate: 2021-02-01T00:00:00.000Z } }
            */
            logger.info('interval daterange entity type');
            timex = _.get(entity, 'resolution.timex');
            if (timex != null) {
                logger.info(timex);
                const year = today.getUTCFullYear();
                const monthString = timex.split('-')[1];
                return new Date(`${year}-${monthString}-01T00:00:00.000Z`);
            }
            break;
        case 'daterange':
            /*
                "show January 2019 calendar"
                resolution:
                { type: 'daterange',
                    timex: '2019-01',
                    start: 2019-01-01T00:00:00.000Z,
                    end: 2019-02-01T00:00:00.000Z,
                    date: 2019-01-01T00:00:00.000Z } }
            */
            logger.info('daterange daterange entity type');
            timex = _.get(entity, 'resolution.timex');
            if (timex != null) {
                logger.info(timex);
                return new Date(`${timex}-01T00:00:00.000Z`);
            }
            break;
    }
    return null;
};

const getMonthAsTwoDigitString = utcMonth => {
    let month = `${'' + (utcMonth+1)}`;
    return month.length === 1 ? `0${month}` : month;
};

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueDateRanges = intentsHelper.getUniqueDateEntities(entities);
    const today = new Date(Date.now());
    if (uniqueDateRanges.length === 0) {
        uniqueDateRanges.push({
            resolution: {
                type: 'daterange',
                timex: `${today.getUTCFullYear()}-${getMonthAsTwoDigitString(today.getUTCMonth())}`
            }
        })
    }
    const promises = [];
    for (let i=0;i<Math.min(uniqueDateRanges.length, 5);i++) {
        const date = getDateForEntity(uniqueDateRanges[i], today);
        if (date != null) {
            const year = date.getUTCFullYear();
            const month = getMonthAsTwoDigitString(date.getUTCMonth());
            if (year != null && month != null) {
                const yyyymmString = `${year}-${month}`;
                promises.push(getCalendarUrl(yyyymmString).then(url => {
                    if (url != null) {
                        replyMessages.push({
                            type: 'image',
                            originalContentUrl: url,
                            previewImageUrl: url
                        });
                    } else {
                        replyMessages.push({
                            type: 'text',
                            text:`Sorry, the calendar for ${year}-${month} is not available.`
                        });
                    }
                }));
            }
        }
    }

    if (uniqueDateRanges.length > 5) {
        broadcastMessages.push({
            type: 'text',
            text: 'I can only show up to five calendars 😢'
        });
    }

    return Promise.all(promises).then(() => {
        return {
            replyMessages,
            broadcastMessages
        };
    });
};

module.exports = {
    handle,
    getCalendarUrlForToday,
    intentLabel,
    intentThreshold
};