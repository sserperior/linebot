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

/*
const getHarpoonTeams = () => {
    const doc = new GoogleSpreadsheet(process.env.TMTR_HARPOON_GOOGLE_SPREADSHEET_KEY);
    return new Promise((resolve, reject) => {
        doc.getInfo((err, info) => {
            if (err) {
                reject(err);
            }
            const harpoonsWorksheet = info.worksheets[0];
            const teams = {
                teamA: [],
                teamB: []
            };
            harpoonsWorksheet.getRows({}, (err, rows) => {
                if (err) {
                    reject(err);
                }
                rows.forEach(row => {
                    teams.teamA.push(row.teama);
                    teams.teamB.push(row.teamb);
                });
                resolve(teams);
            });
        });
    });
};

const handleHarpoonTeamQuery = (groupId, entities, replyToken) => {
    logger.info('handle harpoon.team.query intent');

    return getHarpoonTeams().then(teams => {
        const promises = [];
        const messages = [];
        const uniqueAllianceMemberNames = [];
        
        for (let i=0;i<Math.min(entities.length, 5);i++) {
            if (entities[i].entity === 'allianceMember') {
                const allianceMemberName = entities[i].option;
                if (allianceMemberName != null && !uniqueAllianceMemberNames.includes(allianceMemberName)) {
                    uniqueAllianceMemberNames.push(allianceMemberName);
                    const isTeamA = teams.teamA.includes(allianceMemberName);
                    const isTeamB = teams.teamB.includes(allianceMemberName);
                    let team = 'unknown';
                    if (isTeamA && isTeamB) {
                        team = 'A and B';
                    } else if (isTeamA) {
                        team = 'A';
                    } else if (isTeamB) {
                        team = 'B';
                    }
                    messages.push({
                        type: 'text',
                        text: `${allianceMemberName} is on harpoon Team ${team}`
                    });                    
                }
            }
        }

        promises.push(
            lineClient.replyMessage(replyToken, messages).catch(logger.error)
        );
    
        if (uniqueAllianceMemberNames.length > 5) {
            promises.push(
                lineClient.pushMessage(
                    groupId,
                    {
                        type: 'text',
                        text: 'I can only show the teams for up to five alliance members 😢'
                    }
                ).catch(logger.error)
            );
        }
        return Promise.all(promises);        
    });   
};
*/

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

const middleware2 = generateResponse => ([
    line.middleware(lineConfig),
    createLineEventsProcessor(generateResponse)
]);

module.exports = {
    middleware2
};