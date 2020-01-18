const logger = require('logger');
const elementList = require('nlp/entities/elements');

const intentLabel = 'farm.elemental.chest';
const intentThreshold = parseFloat(process.env.FARM_ELEMENTAL_CHEST_INTENT_THRESHOLD || 0.8);

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const uniqueElementIds = [];

    for (let i=0;i<Math.min(entities.length, 5);i++) {
        if (entities[i].entity === 'element') {
            const elementId = entities[i].option;
            if (elementId != null && !uniqueElementIds.includes(elementId)) {
                uniqueElementIds.push(elementId);
                const elementData = elementList[elementId];
                replyMessages.push({
                    type: 'image',
                    originalContentUrl: elementData.chestFarmingImgUrl,
                    previewImageUrl: elementData.chestFarmingImgUrl
                });
            }
        }
    }

    return {
        replyMessages
    };
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};