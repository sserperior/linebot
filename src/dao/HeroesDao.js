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

exportable.findHeroNames = async (elementIds, stars, manaSpeeds, classes, families) => exportable.findHeroes({
        element: { $in: elementIds },
        stars: { $in: stars },
        manaSpeed: { $in: manaSpeeds },
        classGrade: { $in: classes },
        family: { $in: families }
    },
    'name'
);

module.exports = exportable;