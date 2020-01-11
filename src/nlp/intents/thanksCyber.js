const logger = require('logger');
const bots = require('nlp/entities/bots');

const intentLabel = 'thanks.cyber';

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
    intentLabel
}