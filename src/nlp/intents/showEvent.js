const { GoogleSpreadsheet } = require('google-spreadsheet');

const logger = require('logger');
const events = require('nlp/entities/events').events;
const eventEntity = require('nlp/entities/events').itemEntity;
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.event';
const intentThreshold = parseFloat(process.env.SHOW_EVENT_THRESHOLD || 0.8);

const handleTheMasquerade = async replyMessages => {
    logger.info('handleTheMasquerade');
    const doc = new GoogleSpreadsheet(process.env.MASQUERADE_SPREADSHEET_KEY);
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    });
    logger.info('Authenticated with masquerade spreadsheet');
    await doc.loadInfo();
    const masqueradeWorksheet = doc.sheetsByIndex[0];
    logger.info(`Spreadsheet info loaded: ${masqueradeWorksheet.title}`);
    const rows = await masqueradeWorksheet.getRows();
    for (let i=0;i<rows.length;i++) {
        logger.info(rows[i]['State']);
        logger.info(rows[i]['Description']);
        logger.info(rows[i]['Link']);
        if (rows[i]['State'] === 'active') {
            replyMessages.push({
                type: 'image',
                originalContentUrl: rows[i]['Link'],
                previewImageUrl: rows[i]['Link']
            });
            return;
        }
    }
};

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueEvents = intentsHelper.getUniqueEntities(entities, eventEntity);

    for (let i=0;i<Math.min(uniqueEvents.length, 5); i++) {
        const eventId = uniqueEvents[i].option;
        const eventData = events[eventId];
        switch (eventData.imgUrl) {
            case 'The Masquerade':
                await handleTheMasquerade(replyMessages);
                break;
            default:
                replyMessages.push({
                    type: 'image',
                    originalContentUrl: eventData.imgUrl,
                    previewImageUrl: eventData.imgUrl
                });
        }
    }

    if (uniqueEvents.length > 5) {
        broadcastMessages.push({
            type: 'text',
            text: 'I can only show up to five events 😢'
        });
    }

    return {
        replyMessages,
        broadcastMessages
    };
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};