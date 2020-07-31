const mongoose = require('mongoose');

const herolist = require('nlp/entities/herolist');
const HeroSchema = require('db/HeroSchema');

(async () => {
    const connection = await mongoose.createConnection(process.env.MONGODB_CONNECTION_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    
    const HeroModel = connection.model('hero', HeroSchema, 'heroes');

    console.log('Clearing heroes collection...');
    await HeroModel.deleteMany({});
    console.log('Successfully cleared heroes collection!')

    const savePromises = [];

    Object.keys(herolist.heroes).forEach(async heroId => {
        const hero = new HeroModel(herolist.heroes[heroId]);
        hero.heroId = heroId;
        savePromises.push(hero.save());
    });
    
    await Promise.all(savePromises);

    await connection.close();
})();