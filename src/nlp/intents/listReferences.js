const logger = require('logger');
const cybUtil = require('cybUtil');
const ReferencesDao = require('dao/ReferencesDao');

const intentLabel = 'list.references';
const intentThreshold = parseFloat(process.env.LIST_REFERENCES_INTENT_THRESHOLD || 0.7);

const handle = async entities => {
    logger.info(`handle ${intentLabel} intent`);
    const replyMessages = [];

    const referenceModels = await ReferencesDao.findReferences();
    let displayTextArray = [];
    displayTextArray.push(`${referenceModels.length} references found:`);
    referenceModels.forEach(referenceModel => {
        displayTextArray.push(`\u2022 ${referenceModel.name}`);
    });
    displayTextArray.push(`\nUse 'show to display the specific reference.`);

    replyMessages.push({
        type: 'text',
        text: cybUtil.convertStringArrayToString(displayTextArray)
    });

    return {
        replyMessages
    };
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};
