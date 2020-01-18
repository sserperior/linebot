const logger = require('logger');

const intentLabel = 'do.nothing';
const intentThreshold = parseFloat(process.env.DO_NOTHING_INTENT_THRESHOLD || 0.8);

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);
    return {
        replyMessages: []
    };
}

module.exports = {
    handle,
    intentLabel,
    intentThreshold
}