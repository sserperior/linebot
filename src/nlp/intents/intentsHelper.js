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
    }
};