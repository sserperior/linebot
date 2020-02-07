const logger = require('logger');
const events = require('nlp/entities/events').events;
const eventEntity = require('nlp/entities/events').itemEntity;
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.event';
const intentThreshold = parseFloat(process.env.SHOW_EVENT_THRESHOLD || 0.8);

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueEvents = intentsHelper.getUniqueEntities(entities, eventEntity);

    for (let i=0;i<Math.min(uniqueEvents.length, 5); i++) {
        const eventId = uniqueEvents[i].option;
        const eventData = events[eventId];
        replyMessages.push({
            type: 'image',
            originalContentUrl: eventData.imgUrl,
            previewImageUrl: eventData.imgUrl
        });
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