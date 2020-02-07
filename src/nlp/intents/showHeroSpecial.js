const _ = require('lodash');
const logger = require('logger');
const herolist = require('nlp/entities/herolist');
const intentsHelper = require('nlp/intents/intentsHelper')

const intentLabel = 'show.hero.special';
const intentThreshold = parseFloat(process.env.SHOW_HERO_SPECIAL_INTENT_THRESHOLD || 0.8);

const generateSpecialText = heroData => {
    let specialText = `${heroData.name}'s special is ${_.get(heroData, 'special.name', 'Unknown')}`;
    _.get(heroData, 'special.description', []).forEach(description => {
        specialText += '\n';
        if (description.length > 0) {
            if (!description.endsWith(':')) {
                specialText += `\u2022  ${description}`;
            } else {
                specialText += description;
            }
        }
    });
    return specialText;
};

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueHeroEntities = intentsHelper.getUniqueEntities(entities, 'hero');

    for (let i=0;i<Math.min(uniqueHeroEntities.length, 5);i++) {
        const heroId = uniqueHeroEntities[i].option;
        const heroData = herolist.heroes[heroId];
        replyMessages.push({
            type: 'text',
            text: generateSpecialText(heroData)
        });
    }

    if (uniqueHeroEntities.length > 5) {
        broadcastMessages.push({
            type: 'text',
            text: 'I can only show the specials for up to five heroes 😢'
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