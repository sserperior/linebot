const googleTranslate = require('google-translate')(process.env.GOOGLE_TRANSLATE_API_KEY);

const logger = require('logger');

const commands = [
    'translate',
    'xlate'
];

const detectLanguageAction = text => {
    return new Promise((resolve, reject) => {
        googleTranslate.detectLanguage(text, (err, detection) => {
            if (!err) {
                logger.info(`translate.detectLanguageAction => detected language: ${detection.language}`);
                resolve(detection.language);
            }
            logger.error(err);
            reject(err);
        });
    })
};

const translateTextAction = text => {
    return new Promise((resolve, reject) => {
        googleTranslate.translate(text, 'en', (err, translation) => {
            if (!err) {
                logger.info(`translate.translateTextAction => original text: ${text}`);
                logger.info(`translate.translateTextAction => translated text: ${translation.translatedText}`);
                resolve(translation.translatedText);
            }
            logger.error(err);
            reject(err);
        });
    })
}

const handle = text => {
    return detectLanguageAction(text).then(language => {
        if (language != 'en') {
            return translateTextAction(text).then(translatedText => ({
                replyMessages: [
                    {
                        type: 'text',
                        text: translatedText
                    }
                ]
            }));
        } else {
            return Promise.resolve({
                replyMessages: []
            });
        }
    });
}

module.exports = {
    commands,
    handle
};