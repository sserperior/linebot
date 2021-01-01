const mongoose = require('mongoose');
const axios = require('axios');

const logger = require('logger');
const cybUtil = require('cybUtil');
const ConnectionManager = require('dao/ConnectionManager');
const cyber88 = require('nlp/entities/cyber88');
const showCalendar = require('nlp/intents/showCalendar');

const intentLabel = 'check.cyber.health';
const intentThreshold = parseFloat(process.env.CHECK_CYBER_HEALTH_INTENT_THRESHOLD || 0.95);

const checkCalendar = async calendarInfoReader => {
    const calendarInfo = await calendarInfoReader();
    logger.info(calendarInfo);
    const url = await calendarInfo.urlPromise;
    let result = {
        yyyymmString: calendarInfo.yyyymmString
    };
    if (url != null) {
        try {
            const response = await axios.get(url);
            result.status = response.status === 200 ? 'OK' : `Not OK[${response.status}]`;
        } catch (error) {
            logger.error('Unable to get Calendar');
            logger.error(error.response);
            result = {
                status: `Not OK[${error.response.status}]`,
                yyyymmString: calendarInfo.yyyymmString
            }
        }
    } else {
        result.status = 'Not available';
    }
    return result;
};

const computeMemoryInMB = memoryBytes => Math.round(memoryBytes/1024/1024*100)/100;

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const currentCalendarInfo = await checkCalendar(showCalendar.getCalendarInfoForToday);
    const nextMonthCalendarInfo = await checkCalendar(showCalendar.getCalendarInfoForNextMonth);
    const memoryUsed = process.memoryUsage();
    for (let i=0;i<entities.length;i++) {
        if (entities[i].entity === cyber88.itemEntity) {
            const statusMessages = [
                `Here's how I'm doing:`,
                `\u2022  MongoDB: ${mongoose.STATES[ConnectionManager.getConnection().readyState]}`,
                `\u2022  ${currentCalendarInfo.yyyymmString} Calendar: ${currentCalendarInfo.status}`,
                `\u2022  ${nextMonthCalendarInfo.yyyymmString} Calendar: ${nextMonthCalendarInfo.status}`,
                `\u2022  Node ver: ${process.version}`,
                `\u2022  Mem rss: ${computeMemoryInMB(memoryUsed['rss'])} MB`,
                `\u2022  Mem heapTotal: ${computeMemoryInMB(memoryUsed['heapTotal'])} MB`,
                `\u2022  Mem heapUsed: ${computeMemoryInMB(memoryUsed['heapUsed'])} MB`,
                `\u2022  Mem external: ${computeMemoryInMB(memoryUsed['external'])} MB`,
                `\u2022  Mem arrayBuffers: ${computeMemoryInMB(memoryUsed['arrayBuffers'])} MB`
            ];

            return {
                replyMessages: [
                    {
                        type: 'text',
                        text: cybUtil.convertStringArrayToString(statusMessages)
                    }
                ]
            }
        }
    }
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};