const fs = require('fs');

const { NlpManager } = require('node-nlp');

const logger = require('logger');
const showHero = require('nlp/intents/showHero');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');

let manager = null;

const threshold = parseFloat(process.env.AI_INTENT_THRESHOLD);

const getManager = () => {
    if (fs.existsSync('hero-brain.nlp') && manager == null) {
        manager = new NlpManager({ languages: ['en'] });
        manager.load('hero-brain.nlp');
    }
    return manager;
}

const handleHarpoonTeamQuery = entities => ({
    replyMessages: [],
    broadcastMessages: []
});

const generateResponse = messageText => getManager().process(messageText).then(result => {
    logger.info(result);
    if (result.score >= threshold) {
        switch(result.intent) {
            case showHero.intentLabel:
                logger.info(`${showHero.intentLabel} intent`);
                return Promise.resolve(showHero.handle(result.entities));
            case harpoonTeamQuery.intentLabel:
                logger.info(`${harpoonTeamQuery.intentLabel} intent`);
                return Promise.resolve(harpoonTeamQuery.handle(result.entities));    
        }
    }
    return Promise.resolve();
});

module.exports = {
    getManager,
    generateResponse,
    threshold: 0.8
};