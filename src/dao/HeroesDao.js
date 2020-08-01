const HeroSchema = require('db/HeroSchema');

const exportable = {};

let heroModel = null;

exportable.init = connection => {
    if (heroModel == null) {
        heroModel = connection.model('hero', HeroSchema, 'heroes');
    }
};

exportable.findHeroByHeroId = async heroId => heroModel.findOne({ heroId }).lean().exec();

exportable.findHeroes = async (conditions, projection=null) => heroModel.find(conditions, projection).sort({ name: 1}).lean().exec();

exportable.findHeroesByHeroIds = async heroIds => exportable.findHeroes({ heroId: { $in: heroIds }});

exportable.findHeroNamesByElementIds = async elementIds => exportable.findHeroes({ element: { $in: elementIds }}, 'name');

exportable.findHeroNamesByElementIdsAndStars = async (elementIds, stars) => exportable.findHeroes({ element: { $in: elementIds }, stars: { $in: stars }}, 'name');

module.exports = exportable;