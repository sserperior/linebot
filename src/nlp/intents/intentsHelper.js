const _ = require('lodash');

module.exports = {
    getUniqueEntities: (entities, itemEntity) => {
        const uniqueEntities = [];
        const uniqueIds = [];
        entities.forEach(entity => {
            if (entity.entity === itemEntity && entity.option != null && !uniqueIds.includes(entity.option)) {
                uniqueEntities.push(entity);
                uniqueIds.push(entity.option);
            }
        });
        return uniqueEntities;
    },

    getUniqueNumberEntities: entities => {
        const uniqueValues = [];
        entities.forEach(entity => {
            if (entity.entity === 'number' && !uniqueValues.includes(entity.resolution.value)) {
                uniqueValues.push(entity.resolution.value);
            }
        });
        return uniqueValues;
    },

    getUniqueDateEntities: entities => {
        const timexToDateEntitiesMap = {};
        entities.forEach(entity => {
            if (entity.entity === 'daterange') {
                const timex = _.get(entity, 'resolution.timex');
                if (timex != null) {
                    timexToDateEntitiesMap[timex] = entity;
                }
            }
        });
        return Object.values(timexToDateEntitiesMap);
    }
};