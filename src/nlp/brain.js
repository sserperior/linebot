const fs = require('fs');

const { NlpManager } = require('node-nlp');

const logger = require('logger');

const translate = require('nlp/commands/translate');
const help = require('nlp/commands/help');
const listReferences = require('nlp/commands/listReferences');

const showHero = require('nlp/intents/showHero');
const showReference = require('nlp/intents/showReference');
const showCalendar = require('nlp/intents/showCalendar');
const harpoonTeamQuery = require('nlp/intents/harpoonTeamQuery');
const showHeroSpecial = require('nlp/intents/showHeroSpecial');
const showHeroGrading = require('nlp/intents/showHeroGrading');
const showHeroTalent = require('nlp/intents/showHeroTalent');
const listHeroes = require('nlp/intents/listHeroes');
const farmElementalChest = require('nlp/intents/farmElementalChest');
const farmItem = require('nlp/intents/farmItem');
const thanksCyber = require('nlp/intents/thanksCyber');
const checkCyberHealth = require('nlp/intents/checkCyberHealth');
const doNothing = require('nlp/intents/doNothing');

let manager = null;

const getManager = () => {
    if (fs.existsSync('hero-brain.nlp') && manager == null) {
        manager = new NlpManager({ languages: ['en'], forceNER: true });
        manager.load('hero-brain.nlp');
    }
    return manager;
};

const getCommandStructure = (trimmedMessage, knownCommands) => {
    const result = {
        command: null,
        subCommand: null,
        parameter: null
    };
    const trimmedMessageLC = trimmedMessage.toLowerCase();
    for (let i=0;i<knownCommands.length;i++) {
        if (trimmedMessageLC.startsWith(knownCommands[i])) {
            logger.info(`command detected: ${knownCommands[i]}`);
            result.command = knownCommands[i];
            // Get subcommand. format is:
            // command:subcommand xxx
            // The split below results in, for example, `translate:af xxx` => ["translate", "af xxx"].
            // If there is no subcommand, we end up with an array of just one element - the entire string.
            const splitTrimmedMessageLC = trimmedMessageLC.split(':');
            if (splitTrimmedMessageLC.length > 1) {
                result.subCommand = splitTrimmedMessageLC[1].split(' ')[0];
            }

            // Get the command parameter
            // `translate:af xxx` => xxx
            const totalCommandLength = result.command.length + (result.subCommand != null ? result.subCommand.length + 1 : 0)
            const commandParameter = trimmedMessage.substring(totalCommandLength).trim();
            logger.info(`command parameter: ${commandParameter}`);
            result.parameter = commandParameter;
            return result;
        }
    }
    return null;
}

const generateCommandResponse = messageText => {
    logger.info('In generateCommandResponse');
    let result = null;
    if (messageText != null) {
        messageText = messageText.trim();
        let commandStructure = null;
        if ((commandStructure = getCommandStructure(messageText, translate.commands)) != null)
        {
            return translate.handle(commandStructure);
        } else if ((commandStructure = getCommandStructure(messageText, help.commands)) != null) {
            return Promise.resolve(help.handle(commandStructure));
        } else if ((commandStructure = getCommandStructure(messageText, listReferences.commands)) != null) {
            return listReferences.handle(commandStructure);
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
        return showHero.handle(result.entities);
    } else if (isRecognizedIntent(intent, score, showReference)) {
        return showReference.handle(result.entities);
    } else if (isRecognizedIntent(intent, score, harpoonTeamQuery)) {
        return Promise.resolve(harpoonTeamQuery.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, showHeroSpecial)) {
        return showHeroSpecial.handle(result.entities);
    } else if (isRecognizedIntent(intent, score, showHeroTalent)) {
        return showHeroTalent.handle(result.entities);
    } else if (isRecognizedIntent(intent, score, listHeroes)) {
        return listHeroes.handle(result.entities);
    } else if (isRecognizedIntent(intent, score, farmElementalChest)) {
        return Promise.resolve(farmElementalChest.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, showHeroGrading)) {
        return showHeroGrading.handle(result.entities);
    } else if (isRecognizedIntent(intent, score, farmItem)) {
        return Promise.resolve(farmItem.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, thanksCyber)) {
        return Promise.resolve(thanksCyber.handle(result.entities));
    } else if (isRecognizedIntent(intent, score, checkCyberHealth)) {
        return checkCyberHealth.handle(result.entities);
    } else if (isRecognizedIntent(intent, score, showCalendar)) {
        return showCalendar.handle(result.entities);
    } else if (isRecognizedIntent(intent, score, doNothing)) {
        // default case.
    }
    return Promise.resolve({});
});

module.exports = {
    getManager,
    generateResponse
};