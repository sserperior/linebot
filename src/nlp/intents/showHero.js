const logger = require('logger');
const HeroesDao = require('dao/HeroesDao');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.hero';
const intentThreshold = parseFloat(process.env.SHOW_HERO_INTENT_THRESHOLD || 0.8);

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
            type: 'image',
            originalContentUrl: heroModel.imgUrl,
            previewImageUrl: heroModel.imgUrl
        });
    });

    if (uniqueHeroEntities.length > 5) {
        broadcastMessages.push({
            type: 'text',
            text: 'I can only show up to five heroes 😢'
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