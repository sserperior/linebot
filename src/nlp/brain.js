const fs = require('fs');

const { NlpManager } = require('node-nlp');

const logger = require('logger');
const showHero = require('nlp/intents/showHero');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');
const showHeroSpecial = require('nlp/intents/showHeroSpecial');
const farmElementalChest = require('nlp/intents/farmElementalChest');
const thanksCyber = require('nlp/intents/thanksCyber');
const doNothing = require('nlp/intents/doNothing');

let manager = null;

const getManager = () => {
    if (fs.existsSync('hero-brain.nlp') && manager == null) {
        manager = new NlpManager({ languages: ['en'] });
        manager.load('hero-brain.nlp');
    }
    return manager;
};

const isRecognizedIntent = (intent, score, knownIntent) => intent === knownIntent.intentLabel && score >= knownIntent.intentThreshold;

const generateResponse = messageText => getManager().process(messageText).then(result => {
    logger.info(result);
    logger.info(`${result.intent} intent, score: ${result.score}`);
    const { intent, score } = result;
    if (isRecognizedIntent(intent, score, showHero)) {
        return Promise.resolve(showHero.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, harpoonTeamQuery)) {
        return Promise.resolve(harpoonTeamQuery.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, showHeroSpecial)) {
        return Promise.resolve(showHeroSpecial.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, farmElementalChest)) {
        return Promise.resolve(farmElementalChest.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, thanksCyber)) {
        return Promise.resolve(thanksCyber.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, doNothing)) {
        // default case.
    }
    return Promise.resolve();
});

module.exports = {
    getManager,
    generateResponse
};