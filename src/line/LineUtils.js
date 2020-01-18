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
                return generateResponse(_.get(event, 'message.text')).then(response => {
                    const replyMessages = response.replyMessages;
                    const broadcastMessages = response.broadcastMessages;
                    logger.info(`replyMessages: ${replyMessages}`);
                    logger.info(`broadcastMessages: ${broadcastMessages}`);
                    const promises = [];
                    if (replyMessages != null && replyMessages.length > 0) {
                        promises.push(lineClient.replyMessage(event.replyToken, replyMessages).catch(logger.error));
                    }
                    if (broadcastMessages != null && broadcastMessages.length > 0) {
                        broadcastMessages.forEach(broadcastMessage => {
                            promises.push(lineClient.pushMessage(groupId, broadcastMessage).catch(logger.error));
                        });
                    }
                    if (promises.length > 0) {
                        return Promise.all(promises);
                    } else {
                        return Promise.resolve({});
                    }
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