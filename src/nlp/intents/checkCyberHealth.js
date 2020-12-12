const mongoose = require('mongoose');
const axios = require('axios');

const logger = require('logger');
const cybUtil = require('cybUtil');
const ConnectionManager = require('dao/ConnectionManager');
const cyber88 = require('nlp/entities/cyber88');
const showCalendar = require('nlp/intents/showCalendar');

const intentLabel = 'check.cyber.health';
const intentThreshold = parseFloat(process.env.CHECK_CYBER_HEALTH_INTENT_THRESHOLD || 0.95);

const checkCalendar = async () => {
    const calendarUrl = await showCalendar.getCalendarUrlForToday();
    let result = null;
    try {
        const response = await axios.get(calendarUrl);
        result = response.status === 200 ? 'OK' : `Not OK[${response.status}]`;
    } catch (error) {
        logger.error('Unable to get current Calendar');
        logger.error(error.response);
        result = `Not OK[${error.response.status}]`;
    }
    return result;
};

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const calendarStatus = await checkCalendar();
    for (let i=0;i<entities.length;i++) {
        if (entities[i].entity === cyber88.itemEntity) {
            const statusMessages = [
                `Here's how I'm doing:`,
                `\u2022  MongoDB: ${mongoose.STATES[ConnectionManager.getConnection().readyState]}`,
                `\u2022  Calendar: ${calendarStatus}`,
                `\u2022  Node ver: ${process.version}`
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