const _ = require('lodash');
const line = require('@line/bot-sdk');

const lineConfig = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};

const lineClient = new line.Client(lineConfig);

const fetchUserDisplayName = (groupId, userId) => {
    if (groupId != null && userId != null) {
        return lineClient.getGroupMemberProfile(groupId, userId)
            .then(profile => {
                console.log(`profile.displayName: ${profile.displayName}`);
                return profile.displayName;
            })
            .catch(err => {
                console.error(err);
                console.error(`Unable to get profile for groupId ${groupId}, userId ${userId}`);
                return null;
            });
    } else {
        return Promise.resolve();
    }
};

const generateResponseText = (userDisplayName, messageText) => {
    const lMessageText = messageText.toLowerCase();
    const prefix = userDisplayName != null ? `${userDisplayName}: ` : ''
    if (lMessageText.includes('moose')) {
        return `${prefix} Moose is the greatest!`;
    } else if (lMessageText.includes('dawa')) {
        return `${prefix} Dawa is very special (not)`;
    } else if (lMessageText.includes('khagan')) {
        return `${prefix} Khagan is borderline useless`;
    } else if (lMessageText.includes('work on next')) {
        return '@88pokemon, where are you?';
    }
    if (lMessageText.includes('@cyber88')) {
        // It's addressed to the bot
        return `Hi ${prefix}. I can't help you with that yet.`;
    }
};

const handleEvent = event => {
    if (_.get(event, 'type') === 'message') {
        console.log('message event', event);
        if (_.get(event, 'message.type') === 'text') {
            const groupId = _.get(event, 'source.groupId');
            const userId = _.get(event, 'source.userId');
            console.log(`Message from groupId: ${groupId} userId: ${userId}`);
            fetchUserDisplayName(groupId, userId).then(userDisplayName => {
                const messageText = _.get(event, 'message.text');
                const responseText = generateResponseText(userDisplayName, messageText);
                if (responseText != null) {
                    return lineClient.replyMessage(
                        event.replyToken,
                        {
                            type: 'text',
                            text: responseText
                        }
                    )
                }
            });
        }
    }
    return Promise.resolve();
}

const lineEventsProcessor = (req, res, next) => {
    Promise.all(req.body.events.map(handleEvent))
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500).end();
        });
};

const middleware = [
    line.middleware(lineConfig),
    lineEventsProcessor
];

module.exports = {
    middleware,
    lineClient
};