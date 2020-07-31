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
            } else {
                logger.error(err);
                reject(err);
            }
        });
    })
};

const translateTextAction = (text, destinationLanguage) => {
    return new Promise((resolve, reject) => {
        googleTranslate.translate(text, destinationLanguage, (err, translation) => {
            if (!err) {
                logger.info(`translate.translateTextAction => original text: ${text}`);
                logger.info(`translate.translateTextAction => translated text: ${translation.translatedText}`);
                resolve(translation.translatedText);
            } else {
                logger.error(err);
                reject(err);
            }
        });
    })
}

const getSupportedLanguagesAction = () => {
    return new Promise((resolve, reject) => {
        googleTranslate.getSupportedLanguages((err, languageCodes) => {
            if (!err) {
                logger.info(`translate.getSupportedLanguagesAction => ${languageCodes}`);
                resolve(languageCodes);
            } else {
                logger.error(err);
                reject(err);
            }
        });
    });
}

// translate:af xxx
// command = translate
// subCommand = af
// parameter = xxx
const handle = ({ subCommand, parameter }) => detectLanguageAction(parameter).then(detectedLanguage => {
    let destinationLanguage = 'en';
    if (subCommand != null) {
        destinationLanguage = subCommand;
    }
    if (detectedLanguage === destinationLanguage) {
        return getSupportedLanguagesAction().then(languageCodes => ({
                replyMessages: [
                    {
                        type: 'text',
                        text: `"${parameter}" is already in the target language ${detectedLanguage}`
                    },
                    {
                        type: 'text',
                        text: `I support the following language codes: ${languageCodes}`
                    }
                ]
        }));
    } else {
        return translateTextAction(parameter, destinationLanguage).then(translatedText => ({
            replyMessages: [
                {
                    type: 'text',
                    text: `Language detected: ${destinationLanguage}\n\n${translatedText}`
                }
            ]
        }));
    }
});

module.exports = {
    commands,
    handle
};