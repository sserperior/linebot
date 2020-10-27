const logger = require('logger');
const HeroesDao = require('dao/HeroesDao');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.hero.grading';
const intentThreshold = parseFloat(process.env.SHOW_HERO_GRADING_INTENT_THRESHOLD || 0.7);

const generateGradingText = heroModel => {
    const gradingData = heroModel.grading;
    let result = `${heroModel.name}: ${gradingData.overallGrade}`;
    result += `\n\nClass: ${heroModel.classGrade}`;
    result += `\n\nTitan: ${gradingData.titanGrade.overall}`;
    result += `\n\u2022  Stamina: ${gradingData.titanGrade.stamina}`;
    result += `\n\u2022  Passive: ${gradingData.titanGrade.passive}`;
    result += `\n\u2022  Direct: ${gradingData.titanGrade.direct}`;
    result += `\n\u2022  Tiles: ${gradingData.titanGrade.tiles}`;
    result += `\n\u2022  Vers: ${gradingData.titanGrade.vers}`;
    result += `\n\nOffense: ${gradingData.offenseGrade.overall}`;
    result += `\n\u2022  Speed: ${gradingData.offenseGrade.speed}`;
    result += `\n\u2022  Stamina: ${gradingData.offenseGrade.stamina}`;
    result += `\n\u2022  Passive: ${gradingData.offenseGrade.passive}`;
    result += `\n\u2022  Direct: ${gradingData.offenseGrade.direct}`;
    result += `\n\u2022  War: ${gradingData.offenseGrade.war}`;
    result += `\n\nDefense: ${gradingData.defenseGrade.overall}`;
    result += `\n\u2022  Speed: ${gradingData.defenseGrade.speed}`;
    result += `\n\u2022  Stamina: ${gradingData.defenseGrade.stamina}`;
    result += `\n\u2022  Passive: ${gradingData.defenseGrade.passive}`;
    result += `\n\u2022  Direct: ${gradingData.defenseGrade.direct}`;
    result += `\n\u2022  Tank: ${gradingData.defenseGrade.tank}`;
    result += `\n\u2022  Flank: ${gradingData.defenseGrade.flank}`;
    result += `\n\u2022  Wing: ${gradingData.defenseGrade.wing}`;
    result += `\n\nWeekly Raid:`;
    result += `\n\u2022  Rush: ${gradingData.weeklyRaidTournamentGrade.rush}`;
    result += `\n\u2022  Buff: ${gradingData.weeklyRaidTournamentGrade.buff}`;
    result += `\n\u2022  Bloody: ${gradingData.weeklyRaidTournamentGrade.bloody}`;
    return result;
};

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueHeroEntities = intentsHelper.getUniqueEntities(entities, 'hero');
    const promises = [];
    const heroIds = [];
    for (let i=0;i<Math.min(uniqueHeroEntities.length, 5);i++) {
        heroIds.push(uniqueHeroEntities[i].option);
    }

    const heroModels = await HeroesDao.findHeroesByHeroIds(heroIds);

    heroModels.forEach(heroModel => {
        if (heroModel != null) {
            replyMessages.push({
                type: 'text',
                text: generateGradingText(heroModel)
            });
        }
    });

    if (uniqueHeroEntities.length > 5) {
        broadcastMessages.push({
            type: 'text',
            text: 'I can only show grading information for up to five heroes 😢'
        });
    }

    return Promise.resolve({ replyMessages, broadcastMessages });
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};