module.exports = {
    getUniqueHeroEntities: entities => {
        const uniqueHeroEntities = [];
        const uniqueHeroIds = [];
        entities.forEach(entity => {
            if (entity.entity === 'hero' && entity.option != null && !uniqueHeroIds.includes(entity.option)) {
                uniqueHeroEntities.push(entity);
                uniqueHeroIds.push(entity.option);
            }
        });
        return uniqueHeroEntities;
    }
};