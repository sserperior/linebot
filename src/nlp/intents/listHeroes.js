const logger = require('logger');
const HeroesDao = require('dao/HeroesDao');
const elements = require('nlp/entities/elements');
const ManaSpeeds = require('nlp/entities/ManaSpeeds');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'list.heroes';
const intentThreshold = parseFloat(process.env.LIST_HERO_INTENT_THRESHOLD || 0.7);

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const uniqueElementEntities = intentsHelper.getUniqueEntities(entities, 'element');
    const uniqueManaSpeedEntities = intentsHelper.getUniqueEntities(entities, 'manaSpeed');
    const uniqueStarEntities = intentsHelper.getUniqueNumberEntities(entities);
    const elementIds = [];
    const manaSpeeds = [];

    uniqueElementEntities.forEach(uniqueElementEntity => {
        elementIds.push(elements[uniqueElementEntity.option].id);
    });

    uniqueManaSpeedEntities.forEach(uniqueManaSpeedEntity => {
        manaSpeeds.push(ManaSpeeds[uniqueManaSpeedEntity.option].value);
    });

    if (elementIds.length === 0) {
        elementIds.push(elements.ice.id);
        elementIds.push(elements.fire.id);
        elementIds.push(elements.nature.id);
        elementIds.push(elements.holy.id);
        elementIds.push(elements.dark.id);
    }

    if (manaSpeeds.length === 0) {
        manaSpeeds.push(ManaSpeeds.VERY_FAST.value);
        manaSpeeds.push(ManaSpeeds.FAST.value);
        manaSpeeds.push(ManaSpeeds.AVERAGE.value);
        manaSpeeds.push(ManaSpeeds.SLOW.value);
        manaSpeeds.push(ManaSpeeds.VERY_SLOW.value);
        manaSpeeds.push(ManaSpeeds.CHARGE.value);
    }

    if (uniqueStarEntities.length === 0) {
        uniqueStarEntities.push(3);
        uniqueStarEntities.push(4);
        uniqueStarEntities.push(5);
    }

    const heroModels = await HeroesDao.findHeroNames(elementIds, uniqueStarEntities, manaSpeeds);

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