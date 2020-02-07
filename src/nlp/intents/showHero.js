const logger = require('logger');
const herolist = require('nlp/entities/herolist');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.hero';
const intentThreshold = parseFloat(process.env.SHOW_HERO_INTENT_THRESHOLD || 0.8);

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueHeroEntities = intentsHelper.getUniqueEntities(entities, 'hero');

    for (let i=0;i<Math.min(uniqueHeroEntities.length, 5);i++) {
        const heroId = uniqueHeroEntities[i].option;
        const heroData = herolist.heroes[heroId];
        replyMessages.push({
            type: 'image',
            originalContentUrl: heroData.imgUrl,
            previewImageUrl: heroData.imgUrl
        });
    }

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