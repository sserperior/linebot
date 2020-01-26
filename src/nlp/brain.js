const fs = require('fs');

const { NlpManager } = require('node-nlp');

const logger = require('logger');

const translate = require('nlp/commands/translate');

const showHero = require('nlp/intents/showHero');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');
const showHeroSpecial = require('nlp/intents/showHeroSpecial');
const farmElementalChest = require('nlp/intents/farmElementalChest');
const farmItem = require('nlp/intents/farmItem');
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

const getCommandParameter = (trimmedMessage, knownCommands) => {
    const trimmedMessageLC = trimmedMessage.toLowerCase();
    for (let i=0;i<knownCommands.length;i++) {
        const knownCommandLength = knownCommands[i].length;
        if (trimmedMessageLC.startsWith(knownCommands[i])) {
            logger.info(`command detected: ${knownCommands[i]}`);
            const commandParameter = trimmedMessage.substring(knownCommandLength).trim();
            logger.info(`command parameter: ${commandParameter}`);
            return commandParameter;
        }
    }
    return null;
}

const generateCommandResponse = messageText => {
    logger.info('In generateCommandResponse');
    let result = null;
    if (messageText != null) {
        messageText = messageText.trim();
        let commandParameter = null;
        if ((commandParameter = getCommandParameter(messageText, translate.commands)) != null)
        {
            return translate.handle(commandParameter);
        }
    }
    return result;
};

const generateResponse = messageText => {
    const commandResponse = generateCommandResponse(messageText);
    if (commandResponse != null) {
        logger.info(`commandResponse: ${commandResponse}`);
        return commandResponse;
    } else {
        return generateNLResponse(messageText);
    }
};

const isRecognizedIntent = (intent, score, knownIntent) => intent === knownIntent.intentLabel && score >= knownIntent.intentThreshold;

const generateNLResponse = messageText => getManager().process(messageText).then(result => {
    logger.info('In generateNLResponse');
    logger.info(result);
    const { intent, score } = result;
    if (isRecognizedIntent(intent, score, showHero)) {
        return Promise.resolve(showHero.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, harpoonTeamQuery)) {
        return Promise.resolve(harpoonTeamQuery.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, showHeroSpecial)) {
        return Promise.resolve(showHeroSpecial.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, farmElementalChest)) {
        return Promise.resolve(farmElementalChest.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, farmItem)) {
        return Promise.resolve(farmItem.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, thanksCyber)) {
        return Promise.resolve(thanksCyber.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, doNothing)) {
        // default case.
    }
    return Promise.resolve({});
});

module.exports = {
    getManager,
    generateResponse
};