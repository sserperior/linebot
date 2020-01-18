const logger = require('logger');
const bots = require('nlp/entities/bots');

const intentLabel = 'thanks.cyber';
const intentThreshold = parseFloat(process.env.THANKS_CYBER_INTENT_THRESHOLD || 0.95);

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);

    for (let i=0;i<entities.length;i++) {
        if (entities[i].entity === 'cyber') {
            return {
                replyMessages: [
                    {
                        type: 'text',
                        text: "You're most welcome!"
                    }
                ]
            };
        }
    }
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
}