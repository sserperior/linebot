const fs = require('fs');

const { NlpManager } = require('node-nlp');

const logger = require('logger');
const showHero = require('nlp/intents/showHero');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');
const showHeroSpecial = require('nlp/intents/showHeroSpecial');
const farmElementalChest = require('nlp/intents/farmElementalChest');

let manager = null;

const threshold = parseFloat(process.env.AI_INTENT_THRESHOLD);

const getManager = () => {
    if (fs.existsSync('hero-brain.nlp') && manager == null) {
        manager = new NlpManager({ languages: ['en'] });
        manager.load('hero-brain.nlp');
    }
    return manager;
};

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
            case showHeroSpecial.intentLabel:
                logger.info(`${showHeroSpecial.intentLabel} intent`);
                return Promise.resolve(showHeroSpecial.handle(result.entities));
            case farmElementalChest.intentLabel:
                logger.info(`${farmElementalChest.intentLabel} intent`);
                return Promise.resolve(farmElementalChest.handle(result.entities));       
        }
    }
    return Promise.resolve();
});

module.exports = {
    getManager,
    generateResponse,
    threshold: 0.8
};