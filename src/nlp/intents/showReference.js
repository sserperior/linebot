const { GoogleSpreadsheet } = require('google-spreadsheet');

const logger = require('logger');
const ReferencesDao = require('dao/ReferencesDao');
const intentsHelper = require('nlp/intents/intentsHelper');

const intentLabel = 'show.reference';
const intentThreshold = parseFloat(process.env.SHOW_REFERENCE_THRESHOLD || 0.8);

const handleTheMasquerade = async () => {
    logger.info('handleTheMasquerade');
    const doc = new GoogleSpreadsheet(process.env.MASQUERADE_SPREADSHEET_KEY);
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    });
    logger.info('Authenticated with masquerade spreadsheet');
    await doc.loadInfo();
    const masqueradeWorksheet = doc.sheetsByIndex[0];
    logger.info(`Spreadsheet info loaded: ${masqueradeWorksheet.title}`);
    const rows = await masqueradeWorksheet.getRows();
    for (let i=0;i<rows.length;i++) {
        logger.info(rows[i]['State']);
        logger.info(rows[i]['Description']);
        logger.info(rows[i]['Link']);
        if (rows[i]['State'] === 'active') {
            return rows[i]['Link'];
        }
    }
};

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];
    const broadcastMessages = [];
    const uniqueReferences = intentsHelper.getUniqueEntities(entities, 'reference');

    for (let i=0;i<Math.min(uniqueReferences.length, 5); i++) {
        const referenceId = uniqueReferences[i].option;
        const referenceModel = await ReferencesDao.findReferenceByName(referenceId);
        if (referenceModel.imgUrl != null) {
            switch (referenceModel.imgUrl) {
                case 'The Masquerade':
                    referenceModel.imgUrl = await handleTheMasquerade();
                    break;
            }
            replyMessages.push({
                type: 'image',
                originalContentUrl: referenceModel.imgUrl,
                previewImageUrl: referenceModel.imgUrl
            });
        } else {
            replyMessages.push({
                type: 'text',
                text: 'Coming soon...'
            })
        }
    }

    if (uniqueReferences.length > 5) {
        broadcastMessages.push({
            type: 'text',
            text: 'I can only show up to five references 😢'
        });
    }

    return {
        replyMessages,
        broadcastMessages
    };
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};