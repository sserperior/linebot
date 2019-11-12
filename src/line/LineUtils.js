const _ = require('lodash');

const line = require('@line/bot-sdk');

const logger = require('logger');

const lineConfig = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};

const lineClient = new line.Client(lineConfig);

const fetchUserDisplayName = (groupId, userId) => {
    if (groupId != null && userId != null) {
        return lineClient.getGroupMemberProfile(groupId, userId)
            .then(profile => {
                logger.info(`profile.displayName: ${profile.displayName}`);
                return profile.displayName;
            })
            .catch(err => {
                logger.error(err);
                logger.error(`Unable to get profile for groupId ${groupId}, userId ${userId}`);
                return null;
            });
    } else {
        return Promise.resolve();
    }
};

const createEventHandler = generateResponse => event => {
    if (_.get(event, 'type') === 'message') {
        logger.info('message event', event);
        if (_.get(event, 'message.type') === 'text') {
            const groupId = _.get(event, 'source.groupId');
            const userId = _.get(event, 'source.userId');
            logger.info(`Message from groupId: ${groupId} userId: ${userId}`);
            return fetchUserDisplayName(groupId, userId).then(userDisplayName => {
                /**
                 * Expected response structure:
                 * {
                 *      replyMessages: [], // 0-5 message objects to be sent using the replyToken
                 *      broadcastMessages: [] // message objects to be sent via broadcast.
                 * }
                 */
                //reply(groupId, userDisplayName, _.get(event, 'message.text'), event.replyToken)                
                return generateResponse(_.get(event, 'message.text')).then(({ replyMessages, broadcastMessages}) => {
                    const promises = [];
                    promises.push(lineClient.replyMessage(event.replyToken, replyMessages).catch(logger.error));
                    broadcastMessages.forEach(broadcastMessage => {
                        promises.push(lineClient.pushMessage(groupId, broadcastMessage).catch(logger.error));
                    });
                    return Promise.all(promises);
                });
            });
        }
    }
    return Promise.resolve();    
}

const createLineEventsProcessor = generateResponse => (req, res, next) => {
    Promise.all(req.body.events.map(createEventHandler(generateResponse)))
        .then(result => res.json(result))
        .catch(err => {
            logger.error(err);
            res.status(500).end();
        });
};

const middleware = generateResponse => ([
    line.middleware(lineConfig),
    createLineEventsProcessor(generateResponse)
]);

module.exports = {
    middleware
};