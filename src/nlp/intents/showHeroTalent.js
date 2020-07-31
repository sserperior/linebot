const logger = require('logger');
const HeroesDao = require('dao/HeroesDao');
const talent = require('nlp/entities/talent');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.hero.talent';
const intentThreshold = parseFloat(process.env.SHOW_HERO_TALENT_INTENT_THRESHOLD || 0.7);

const generateOtherTalentText = ({ attack, defense, health, foodRequired, ironRequired, emblemsRequired, ... otherStats }) => {
    let otherTalentText = '';
    Object.keys(otherStats).forEach(otherStatKey => {
        otherTalentText += `\u2022  ${otherStatKey}: +${otherStats[otherStatKey]}%\n`;
    });
    return otherTalentText;
};

const generateTalentText = heroData => {
    const talentResults = talent.calculate({
        attack: heroData.attack,
        defense: heroData.defense,
        health: heroData.health
    }, heroData.stars, heroData.classGrade);
    let specialText = `${heroData.name}'s ${heroData.classGrade} talents:\n`;
    specialText += '🗡️ Path:\n';
    specialText += `\u2022  Attack: ${talentResults.swordPath.attack}  ( +${talentResults.swordPath.attack - heroData.attack} )\n`;
    specialText += `\u2022  Defense: ${talentResults.swordPath.defense}  ( +${talentResults.swordPath.defense - heroData.defense} )\n`;
    specialText += `\u2022  Health: ${talentResults.swordPath.health}  ( +${talentResults.swordPath.health - heroData.health} )\n`;

    specialText += generateOtherTalentText(talentResults.swordPath);
    specialText += '\n';

    specialText += '🛡️ Path:\n';
    specialText += `\u2022  Attack: ${talentResults.shieldPath.attack}  ( +${talentResults.shieldPath.attack - heroData.attack} )\n`;
    specialText += `\u2022  Defense: ${talentResults.shieldPath.defense}  ( +${talentResults.shieldPath.defense - heroData.defense} )\n`;
    specialText += `\u2022  Health: ${talentResults.shieldPath.health}  ( +${talentResults.shieldPath.health - heroData.health} )\n`;

    specialText += generateOtherTalentText(talentResults.shieldPath);
    specialText += '\n';
    specialText += 'Requirements:\n'
    specialText += `\u2022  Food: ${talentResults.shieldPath.foodRequired}\n`;
    specialText += `\u2022  Iron: ${talentResults.shieldPath.ironRequired}\n`;
    specialText += `\u2022  Emblems: ${talentResults.shieldPath.emblemsRequired}\n`;
    
    return specialText;
};

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueHeroEntities = intentsHelper.getUniqueEntities(entities, 'hero');
    const heroIds = [];

    for (let i=0;i<Math.min(uniqueHeroEntities.length, 5);i++) {
        heroIds.push(uniqueHeroEntities[i].option);
    }

    const heroModels = await HeroesDao.findHeroesByHeroIds(heroIds);

    heroModels.forEach(heroModel => {
        replyMessages.push({
            type: 'text',
            text: generateTalentText(heroModel)
        });
    });

    if (uniqueHeroEntities.length > 5) {
        broadcastMessages.push({
            type: 'text',
            text: 'I can only show the talents for up to five heroes 😢'
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