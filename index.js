const _ = require('lodash');
const line = require('@line/bot-sdk');
const cfenv = require('cfenv');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = cfenv.getAppEnv().port || 3000;

const lineConfig = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};

const client = new line.Client(lineConfig);

const generateResponseText = (userDisplayName, messageText) => {
    const lMessageText = messageText.toLowerCase();
    if (lMessageText.includes('moose')) {
        return `${userDisplayName}: Moose is the greatest!`;
    } else if (lMessageText.includes('dawa')) {
        return `${userDisplayName}: Dawa is very special (not)`;
    } else if (lMessageText.includes('khagan')) {
        return `${userDisplayName}: Khagan is borderline useless`;
    } else if (lMessageText.includes('work on next')) {
        return '@88pokemon, where are you?';
    }
    if (lMessageText.includes('@cyber88')) {
        // It's addressed to the bot
        return `Hi ${userDisplayName}. I can't help you with that yet.`;
    }
};

const fetchUserDisplayName = userId => {
    if (userId != null) {
        return client.getProfile(userId)
            .then(profile => {
                 console.log('profile.displayName: ' + profile.displayName);
                 return Promise.resolve(profile.displayName);
            })
            .catch(err => {
                console.error(err);
                console.error(`Unable to get profile for userId ${userId}`);
                return Promise.reject(null);
            });
    } else {
        return Promise.resolve(null);
    }
};

const handleEvent = event => {
    if (_.get(event, 'type') === 'message') {
        if (_.get(event, 'message.type') === 'text') {
            const userId = _.get(event, 'source.userId');
            console.log('Message from userId: ' + userId);
            fetchUserDisplayName(userId).then(userDisplayName => {
                console.log('The userDisplayName is: ' + userDisplayName);
                const messageText = _.get(event, 'message.text');
                const responseText = generateResponseText(userDisplayName, messageText);
                if (responseText != null) {
                    return client.replyMessage(
                        event.replyToken,
                        {
                            type: 'text',
                            text: responseText                    
                        }
                    );
                }
            });
        }
    }
    return Promise.resolve();
};

app.post('/', line.middleware(lineConfig), (req, res) => {
    Promise.all(req.body.events.map(handleEvent))
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500).end();
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));