const logger = require('logger');
const cybUtil = require('cybUtil');
const ReferencesDao = require('dao/ReferencesDao');

const commands = [
    'list references',
    'list refs'
];

const handle = async () => {
    logger.info(`handle listReferences command...`);
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
    commands,
    handle
};
