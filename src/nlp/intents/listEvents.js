const logger = require('logger');
const events = require('nlp/entities/events');

const intentLabel = 'list.events';
const intentThreshold = parseFloat(process.env.LIST_EVENTS_INTENT_THRESHOLD || 0.7);

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];

    const eventNames = Object.keys(events.events).sort();
    let displayText = `${eventNames.length} events found:`
    eventNames.forEach(eventName => {
        if (displayText.length > 0) {
            displayText += '\n';
        }
        displayText += `\u2022 ${eventName}`;
    });
    displayText += `\n\nUse 'show' to display the specific event.`

    replyMessages.push({
        type: 'text',
        text: displayText
    });

    return {
        replyMessages
    };
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};
