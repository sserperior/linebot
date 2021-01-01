const mongoose = require('mongoose');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const herolist = require('scripts/herolist');
const HeroSchema = require('db/HeroSchema');

const references = require('scripts/referencelist');
const ReferenceSchema = require('db/ReferenceSchema');

const getDefaultGradeValue = value => value == null ? '' : value;

const retrieveGradingData = async () => {
    // Add grading information.
    const doc = new GoogleSpreadsheet(process.env.HERO_GRADING_SPREADSHEET_KEY);
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const heroNameToGradingMap = {};
    const startingRow = 3;
    console.log('Loading AnchorGamed.com Hero Grades...');
    await sheet.loadCells(`B${startingRow}:AG${sheet.rowCount}`);
    console.log('Adding hero grades...');
    for (let i=startingRow;i<sheet.rowCount;i++) {
        const heroLabel = sheet.getCellByA1(`B${i}`).value;
        if (heroLabel != null && heroLabel.trim().length > 0) {
            const heroName = heroLabel.split('*')[0].trim();
            heroNameToGradingMap[heroName] = {
                titanGrade: {
                    stamina: getDefaultGradeValue(sheet.getCellByA1(`F${i}`).value),
                    passive: getDefaultGradeValue(sheet.getCellByA1(`G${i}`).value),
                    direct: getDefaultGradeValue(sheet.getCellByA1(`H${i}`).value),
                    tiles: getDefaultGradeValue(sheet.getCellByA1(`I${i}`).value),
                    vers: getDefaultGradeValue(sheet.getCellByA1(`J${i}`).value),
                    overall: getDefaultGradeValue(sheet.getCellByA1(`K${i}`).value)
                },
                offenseGrade: {
                    speed: getDefaultGradeValue(sheet.getCellByA1(`M${i}`).value),
                    stamina: getDefaultGradeValue(sheet.getCellByA1(`N${i}`).value),
                    passive: getDefaultGradeValue(sheet.getCellByA1(`O${i}`).value),
                    direct: getDefaultGradeValue(sheet.getCellByA1(`P${i}`).value),
                    war: getDefaultGradeValue(sheet.getCellByA1(`Q${i}`).value),
                    overall: getDefaultGradeValue(sheet.getCellByA1(`R${i}`).value)
                },
                defenseGrade:{
                    speed: getDefaultGradeValue(sheet.getCellByA1(`T${i}`).value),
                    stamina: getDefaultGradeValue(sheet.getCellByA1(`U${i}`).value),
                    passive: getDefaultGradeValue(sheet.getCellByA1(`V${i}`).value),
                    direct: getDefaultGradeValue(sheet.getCellByA1(`W${i}`).value),
                    tank: getDefaultGradeValue(sheet.getCellByA1(`X${i}`).value),
                    flank: getDefaultGradeValue(sheet.getCellByA1(`Y${i}`).value),
                    wing: getDefaultGradeValue(sheet.getCellByA1(`Z${i}`).value),
                    overall: getDefaultGradeValue(sheet.getCellByA1(`AA${i}`).value)
                },
                weeklyRaidTournamentGrade: {
                    rush: getDefaultGradeValue(sheet.getCellByA1(`AC${i}`).value),
                    buff: getDefaultGradeValue(sheet.getCellByA1(`AD${i}`).value),
                    bloody: getDefaultGradeValue(sheet.getCellByA1(`AE${i}`).value)
                },
                overallGrade: getDefaultGradeValue(sheet.getCellByA1(`AG${i}`).value)
            }
        }
    }
    return heroNameToGradingMap;
};

const createEmptyGrading = () => ({
    titanGrade: {
        stamina: '',
        passive: '',
        direct: '',
        tiles: '',
        vers: '',
        overall: ''
    },
    offenseGrade: {
        speed: '',
        stamina: '',
        passive: '',
        direct: '',
        war: '',
        overall: ''
    },
    defenseGrade:{
        speed: '',
        stamina: '',
        passive: '',
        direct: '',
        tank: '',
        flank: '',
        wing: '',
        overall: ''
    },
    weeklyRaidTournamentGrade: {
        rush: '',
        buff: '',
        bloody: ''
    },
    overallGrade: ''
});

(async () => {

    const heroNameToGradingMap = await retrieveGradingData();

    const connection = await mongoose.createConnection(process.env.MONGODB_CONNECTION_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    
    const HeroModel = connection.model('hero', HeroSchema, 'heroes');

    console.log('Clearing heroes collection...');
    await HeroModel.deleteMany({});
    console.log('Successfully cleared heroes collection!');
    const savePromises = [];

    Object.keys(herolist.heroes).forEach(heroId => {
        const heroName = herolist.heroes[heroId].name;
        herolist.heroes[heroId].grading = heroNameToGradingMap[heroName];
        if (herolist.heroes[heroId].grading == null) {
            console.log(`heroId ${heroId} has no grading.`)
            herolist.heroes[heroId].grading = createEmptyGrading();
        }
        const hero = new HeroModel(herolist.heroes[heroId]);
        hero.heroId = heroId;
        savePromises.push(hero.save().catch(err => console.log(`could not save ${hero.heroId}. ${hero.grading}`)));
    });

    const ReferenceModel = connection.model('reference', ReferenceSchema, 'references');

    console.log('Clearing references collection...');
    await ReferenceModel.deleteMany({});
    console.log('Successfully cleared references collection!');
    
    Object.keys(references.items).forEach(referenceName => {
        if (references.items[referenceName].imgUrl != null) {
            const reference = new ReferenceModel({
                name: referenceName,
                imgUrl: references.items[referenceName].imgUrl,
                type: references.items[referenceName].type
            });
            savePromises.push(reference.save().catch(err => console.log(`could not save ${referenceName}`)));
        }
    });
    
    await Promise.all(savePromises);

    console.log('Successfully imported DB!');

    await connection.close();
})();