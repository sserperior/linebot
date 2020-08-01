const logger = require('logger');
const HeroesDao = require('dao/HeroesDao');
const elements = require('nlp/entities/elements');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'list.heroes';
const intentThreshold = parseFloat(process.env.LIST_HERO_INTENT_THRESHOLD || 0.7);

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const uniqueElementEntities = intentsHelper.getUniqueEntities(entities, 'element');
    const uniqueStarEntities = intentsHelper.getUniqueNumberEntities(entities);
    const elementIds = [];
    const stars = [];

    for (let i=0;i<Math.min(uniqueElementEntities.length, 5);i++) {
        elementIds.push(uniqueElementEntities[i].option);
    }

    for (let i=0;i<Math.min(uniqueStarEntities.length, 5);i++) {
        stars.push(uniqueStarEntities[i]);
    }

    if (elementIds.length === 0) {
        elementIds.push(elements.ice.id);
        elementIds.push(elements.fire.id);
        elementIds.push(elements.nature.id);
        elementIds.push(elements.holy.id);
        elementIds.push(elements.dark.id);
    }

    if (stars.length === 0) {
        stars.push(3);
        stars.push(4);
        stars.push(5);
    }

    const heroModels = await HeroesDao.findHeroNamesByElementIdsAndStars(elementIds, stars);

    let displayText = `${heroModels.length} heroes found:`;
    heroModels.forEach(heroModel => {
        if (displayText.length > 0) {
            displayText += '\n';
        }
        displayText += `\u2022 ${heroModel.name}`
    });

    replyMessages.push({
        type: 'text',
        text: displayText
    });

    return {
        replyMessages,
    };
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};