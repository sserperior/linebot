const logger = require('logger');
const cybUtil = require('cybUtil');

const commands = [
    'help'
];

const gameHelpText = [
    'I can help with the game:',
    '\u2022  list <stars> <color> <speed> <class> heroes',
    '\u2022  show <hero>',
    '\u2022  show <hero> special',
    '\u2022  show <hero> grading',
    '\u2022  show <hero> talent',
    '\u2022  <farmable item>',
    '\u2022  <color> chest',
    '\u2022  show <event>',
    `\u2022  show <month> <year> calendar`,
    '\u2022  what harpoon team is <member> on?',
    '\u2022  thanks cyber',
    `\u2022  how are you cyber?`
];

const extraText = [
    'I can also:',
    '\u2022  translate:<lang> ...',
    '\u2022  help'
];

const handle = () => ({
    replyMessages: [
        {
            type: 'text',
            text: cybUtil.convertStringArrayToString(gameHelpText)
        },
        {
            type: 'text',
            text: cybUtil.convertStringArrayToString(extraText)
        }
    ]
});

module.exports = {
    commands,
    handle
};