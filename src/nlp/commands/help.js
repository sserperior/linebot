const logger = require('logger');

const commands = [
    'help'
];

const gameHelpText = [
    'I can help with the game:',
    '\u2022  show <hero>',
    '\u2022  show <hero> special',
    '\u2022  show <hero> grading',
    '\u2022  show <hero> talent',
    '\u2022  <farmable item>',
    '\u2022  <color> chest',
    '\u2022  show <event>',
    '\u2022  what harpoon team is <member> on?',
    '\u2022  thanks cyber'
];

const extraText = [
    'I can also:',
    '\u2022  translate:<lang> ...',
    '\u2022  help'
];

const convertStringArrayToString = stringArray => {
    let result = '';
    stringArray.forEach(line => {
        if (result.length > 0) {
            result += '\n';
        }
        result += line;
    });
    return result;
}

const handle = () => ({
    replyMessages: [
        {
            type: 'text',
            text: convertStringArrayToString(gameHelpText)
        },
        {
            type: 'text',
            text: convertStringArrayToString(extraText)
        }
    ]
});

module.exports = {
    commands,
    handle
};