const HeroSchema = require('db/HeroSchema');

const exportable = {};

let heroModel = null;

exportable.init = connection => {
    if (heroModel == null) {
        heroModel = connection.model('hero', HeroSchema, 'heroes');
    }
};

exportable.findHeroByHeroId = heroId => heroModel.findOne({ heroId }).lean().exec();

exportable.findHeroesByHeroIds = heroIds => heroModel.find({ heroId: {
    $in: heroIds
}}).lean().exec();

module.exports = exportable;