const { GoogleSpreadsheet } = require('google-spreadsheet');
const logger = require('logger');
const herolist = require('nlp/entities/herolist');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.hero.grading';
const intentThreshold = parseFloat(process.env.SHOW_HERO_GRADING_INTENT_THRESHOLD || 0.8);

const heroGradingSpreadsheetKey = process.env.HERO_GRADING_SPREADSHEET_KEY;

const startingRow = 3;
const endingRow = 222;

// Load the heroes column (B-startingRow:B-endingRow)
const loadHeroNameToRowIndex = worksheet => {
    logger.info('Loading heroes column');
    const heroNameToRowIndex = {};
    return worksheet.loadCells(`B${startingRow}:B${endingRow}`).then(() => {
        for (let i=startingRow;i<=endingRow;i++) {
            const heroLabel = worksheet.getCellByA1(`B${i}`).value;
            if (heroLabel != null && heroLabel.trim().length > 0) {
                // Remove asterisk at the end of the name if it exists
                const heroName = heroLabel.split('*')[0].trim();
                heroNameToRowIndex[heroName] = i;
            }
        }
        return heroNameToRowIndex;
    });
};

const constructGradingData = (heroRowIndex, worksheet) => worksheet.loadCells(`C${heroRowIndex}:AG${heroRowIndex}`).then(() => ({
        classGrade: worksheet.getCellByA1(`C${heroRowIndex}`).value,
        titanGrade: {
            stamina: worksheet.getCellByA1(`F${heroRowIndex}`).value,
            passive: worksheet.getCellByA1(`G${heroRowIndex}`).value,
            direct: worksheet.getCellByA1(`H${heroRowIndex}`).value,
            tiles: worksheet.getCellByA1(`I${heroRowIndex}`).value,
            vers: worksheet.getCellByA1(`J${heroRowIndex}`).value,
            overall: worksheet.getCellByA1(`K${heroRowIndex}`).value
        },
        offenseGrade: {
            speed: worksheet.getCellByA1(`M${heroRowIndex}`).value,
            stamina: worksheet.getCellByA1(`N${heroRowIndex}`).value,
            passive: worksheet.getCellByA1(`O${heroRowIndex}`).value,
            direct: worksheet.getCellByA1(`P${heroRowIndex}`).value,
            war: worksheet.getCellByA1(`Q${heroRowIndex}`).value,
            overall: worksheet.getCellByA1(`R${heroRowIndex}`).value
        },
        defenseGrade:{
            speed: worksheet.getCellByA1(`T${heroRowIndex}`).value,
            stamina: worksheet.getCellByA1(`U${heroRowIndex}`).value,
            passive: worksheet.getCellByA1(`V${heroRowIndex}`).value,
            direct: worksheet.getCellByA1(`W${heroRowIndex}`).value,
            tank: worksheet.getCellByA1(`X${heroRowIndex}`).value,
            flank: worksheet.getCellByA1(`Y${heroRowIndex}`).value,
            wing: worksheet.getCellByA1(`Z${heroRowIndex}`).value,
            overall: worksheet.getCellByA1(`AA${heroRowIndex}`).value
        },
        weeklyRaidTournamentGrade: {
            rush: worksheet.getCellByA1(`AC${heroRowIndex}`).value,
            buff: worksheet.getCellByA1(`AD${heroRowIndex}`).value,
            bloody: worksheet.getCellByA1(`AE${heroRowIndex}`).value
        },
        overallGrade: worksheet.getCellByA1(`AG${heroRowIndex}`).value
    })
);

const findGradingData = heroName => {
    logger.info('findGradingData');
    const doc = new GoogleSpreadsheet(heroGradingSpreadsheetKey);
    let worksheet = null;
    return doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    }).then(() => {
        logger.info('Authenticated with grading spreadsheet');
        return doc.loadInfo();
    }).then(() => {
        worksheet = doc.sheetsByIndex[0];
        return loadHeroNameToRowIndex(worksheet);
    }).then(heroNameToRowIndex => {
        let index = heroNameToRowIndex[heroName];
        if (index == null) {
            index = -1;
        }
        logger.info(`Located ${heroName} in spreadsheet at row ${index}`);
        return constructGradingData(index, worksheet).then(result => ({
            ... result,
            heroName
        }));
    });
};

const generateGradingText = gradingData => {
    let result = `${gradingData.heroName}: ${gradingData.overallGrade}`;
    result += `\n\nClass: ${gradingData.classGrade}`;
    result += `\n\nTitan: ${gradingData.titanGrade.overall}`;
    result += `\n\u2022  Stamina: ${gradingData.titanGrade.stamina}`;
    result += `\n\u2022  Passive: ${gradingData.titanGrade.passive}`;
    result += `\n\u2022  Direct: ${gradingData.titanGrade.direct}`;
    result += `\n\u2022  Tiles: ${gradingData.titanGrade.tiles}`;
    result += `\n\u2022  Vers: ${gradingData.titanGrade.vers}`;
    result += `\n\nOffense: ${gradingData.offenseGrade.overall}`;
    result += `\n\u2022  Speed: ${gradingData.offenseGrade.speed}`;
    result += `\n\u2022  Stamina: ${gradingData.offenseGrade.stamina}`;
    result += `\n\u2022  Passive: ${gradingData.offenseGrade.passive}`;
    result += `\n\u2022  Direct: ${gradingData.offenseGrade.direct}`;
    result += `\n\u2022  War: ${gradingData.offenseGrade.war}`;
    result += `\n\nDefense: ${gradingData.defenseGrade.overall}`;
    result += `\n\u2022  Speed: ${gradingData.defenseGrade.speed}`;
    result += `\n\u2022  Stamina: ${gradingData.defenseGrade.stamina}`;
    result += `\n\u2022  Passive: ${gradingData.defenseGrade.passive}`;
    result += `\n\u2022  Direct: ${gradingData.defenseGrade.direct}`;
    result += `\n\u2022  Tank: ${gradingData.defenseGrade.tank}`;
    result += `\n\u2022  Flank: ${gradingData.defenseGrade.flank}`;
    result += `\n\u2022  Wing: ${gradingData.defenseGrade.wing}`;
    result += `\n\nWeekly Raid:`;
    result += `\n\u2022  Rush: ${gradingData.weeklyRaidTournamentGrade.rush}`;
    result += `\n\u2022  Buff: ${gradingData.weeklyRaidTournamentGrade.buff}`;
    result += `\n\u2022  Bloody: ${gradingData.weeklyRaidTournamentGrade.bloody}`;
    return result;
};

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueHeroEntities = intentsHelper.getUniqueEntities(entities, 'hero');
    const promises = [];
    for (let i=0;i<Math.min(uniqueHeroEntities.length, 5);i++) {
        const heroId = uniqueHeroEntities[i].option;
        const heroData = herolist.heroes[heroId];
        promises.push(findGradingData(heroData.name));
    }

    return Promise.all(promises).then(results => {
        results.forEach(result => {
            replyMessages.push({
                type: 'text',
                text: generateGradingText(result)
            });
        });
        if (uniqueHeroEntities.length > 5) {
            broadcastMessages.push({
                type: 'text',
                text: 'I can only show grading information for up to five heroes 😢'
            });
        }
        return {
            replyMessages,
            broadcastMessages
        }
   });
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};