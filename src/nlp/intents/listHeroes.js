const logger = require('logger');
const cybUtil = require('cybUtil');
const HeroesDao = require('dao/HeroesDao');
const elements = require('nlp/entities/elements');
const ManaSpeeds = require('nlp/entities/ManaSpeeds');
const Classes = require('nlp/entities/Classes');
const References = require('nlp/entities/references');

const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'list.heroes';
const intentThreshold = parseFloat(process.env.LIST_HERO_INTENT_THRESHOLD || 0.7);

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const uniqueElementEntities = intentsHelper.getUniqueEntities(entities, 'element');
    const uniqueManaSpeedEntities = intentsHelper.getUniqueEntities(entities, 'manaSpeed');
    const uniqueClassEntities = intentsHelper.getUniqueEntities(entities, 'class');
    const uniqueFamilyEntities = intentsHelper.getUniqueEntities(entities, 'reference');
    const uniqueStarEntities = intentsHelper.getUniqueNumberEntities(entities);
    const elementIds = [];
    const manaSpeeds = [];
    const classes = [];
    const families = [];
    const stars = [];

    uniqueElementEntities.forEach(uniqueElementEntity => {
        elementIds.push(elements[uniqueElementEntity.option].id);
    });

    uniqueManaSpeedEntities.forEach(uniqueManaSpeedEntity => {
        manaSpeeds.push(ManaSpeeds[uniqueManaSpeedEntity.option].value);
    });

    uniqueClassEntities.forEach(UniqueClassEntity => {
        classes.push(Classes[UniqueClassEntity.option].value);
    });

    uniqueFamilyEntities.forEach(uniqueFamilyEntity => {
        switch (uniqueFamilyEntity.option) {
            case References.maps.SEASON_2:
                Object.keys(References.atlantisFamilies).forEach(key => {
                    if (!families.includes(References.atlantisFamilies[key])) {
                        families.push(References.atlantisFamilies[key]);
                    }
                });
                break;
            case References.maps.SEASON_3:
                Object.keys(References.realms).forEach(key => {
                    if (!families.includes(References.realms[key])) {
                        families.push(References.realms[key]);
                    }
                });
                break;
            default:
                families.push(uniqueFamilyEntity.option);    
        }
    });

    uniqueStarEntities.forEach(uniqueStarEntity => {
        stars.push(uniqueStarEntity);
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

    if (uniqueClassEntities.length === 0) {
        classes.push(Classes.BARBARIAN.value);
        classes.push(Classes.CLERIC.value);
        classes.push(Classes.DRUID.value);
        classes.push(Classes.FIGHTER.value);
        classes.push(Classes.MONK.value);
        classes.push(Classes.PALADIN.value);
        classes.push(Classes.RANGER.value);
        classes.push(Classes.ROGUE.value);
        classes.push(Classes.SORCERER.value);
        classes.push(Classes.WIZARD.value);
    }

    if (uniqueStarEntities.length === 0) {
        stars.push(3);
        stars.push(4);
        stars.push(5);
    }

    if (uniqueFamilyEntities.length === 0) {
        Object.keys(References.events).forEach(eventKey => {
            families.push(References.events[eventKey]);
        });

        Object.keys(References.seasonalEvents).forEach(eventKey => {
            families.push(References.seasonalEvents[eventKey]);
        });

        families.push(References.maps.SEASON_1);

        Object.keys(References.atlantisFamilies).forEach(eventKey => {
            families.push(References.atlantisFamilies[eventKey]);
        });

        Object.keys(References.realms).forEach(eventKey => {
            families.push(References.realms[eventKey]);
        });
    }

    const heroModels = await HeroesDao.findHeroNames(elementIds, stars, manaSpeeds, classes, families);

    let displayTextArray = [];
    displayTextArray.push(`${heroModels.length} heroes found:`);
    heroModels.forEach(heroModel => {
        displayTextArray.push(`\u2022 ${heroModel.name}`);
    });
    displayTextArray.push(`\nUse 'show' to display the specific hero.`);

    replyMessages.push({
        type: 'text',
        text: cybUtil.convertStringArrayToString(displayTextArray)
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