const logger = require('logger');
const itemMap = {
    ...require('nlp/entities/ingredients'),
    ...require('nlp/entities/ascensionItems')
};

const intentLabel = 'farm.item';
const intentThreshold = parseFloat(process.env.FARM_ITEM_INTENT_THRESHOLD || 0.8);
const itemEntity = 'farmableItem';

const generateFarmingTextSection = section => {
    let sectionText = '';
    if (section != null) {
        section.forEach(line => {
            sectionText += `\n\u2022  ${line}`;
        });
    }
    return sectionText;
};

const generateFarmingText = farmData => {
    let farmingText = 'Best:';
    farmingText += generateFarmingTextSection(farmData.best);
    farmingText += '\n';
    const lowSectionText = generateFarmingTextSection(farmData.low);
    if (lowSectionText.length > 0) {
        farmingText += '\nLow (3-4WE):';
        farmingText += lowSectionText + '\n';
    }
    farmingText += '\nOther:';
    farmingText += generateFarmingTextSection(farmData.other);
    return farmingText;
};

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const uniqueItemIds = [];

    for (let i=0;i<Math.min(entities.length, 2);i++) {
        if (entities[i].entity === itemEntity) {
            const itemId = entities[i].option;
            if (itemId != null && !uniqueItemIds.includes(itemId)) {
                uniqueItemIds.push(itemId);
                const itemData = itemMap[itemId];
                replyMessages.push({
                    type: 'image',
                    originalContentUrl: itemData.imgUrl,
                    previewImageUrl: itemData.imgUrl
                });
                const farmingText = generateFarmingText(itemData.farmData);
                if (farmingText.length > 0) {
                    replyMessages.push({
                        type: 'text',
                        text: farmingText
                    });
                }
            }
        }
    }
    if (entities.length > 2) {
        replyMessages.push({
            type: 'text',
            text: 'Sorry, I can only show two items at a time.'
        });
    }
    return {
        replyMessages
    };
};

module.exports = {
    intentLabel,
    intentThreshold,
    itemMap,
    itemEntity,
    handle
};