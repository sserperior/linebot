module.exports = {
    intentLabel: 'farm.item',
    intentThreshold: parseFloat(process.env.FARM_ITEM_INTENT_THRESHOLD || 0.8),
    itemMap: { ...require('nlp/entities/ingredients'), ...require('nlp/entities/ascensionItems') },
    itemEntity: 'farmableItem'
};