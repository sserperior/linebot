const logger = require('logger');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const intentLabel = 'harpoon.team.query';
const intentThreshold = parseFloat(process.env.HARPOON_TEAM_QUERY_INTENT_THRESHOLD || 0.8);

const getHarpoonTeams = () => {
    logger.info('getHarpoonTeams');
    const doc = new GoogleSpreadsheet(process.env.TMTR_HARPOON_GOOGLE_SPREADSHEET_KEY);
    const teamA = [];
    const teamB = [];
    return doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    }).then(() => {
        logger.info('Authenticated with harpoons spreadsheet');
        return doc.loadInfo().then(() => {
            const harpoonsWorksheet = doc.sheetsByIndex[0];
            logger.info(`Spreadsheet info loaded: ${harpoonsWorksheet.title}`);
            return harpoonsWorksheet.getRows().then(rows => {
                rows.forEach(row => {
                    teamA.push(row['Team A']);
                    teamB.push(row['Team B']);
                });
                logger.info(teamA);
                logger.info(teamB);
                return {
                    teamA,
                    teamB
                };
            });
        });
    });
};

const handle = entities => {
    logger.info(`handle ${intentLabel} intent`);

    return getHarpoonTeams().then(teams => {
        const replyMessages = [];
        const broadcastMessages = [];
        const uniqueAllianceMemberIds = [];

        for (let i=0;i<Math.min(entities.length, 5);i++) {
            if (entities[i].entity === 'allianceMember') {
                const allianceMemberId = entities[i].option;
                if (allianceMemberId != null && !uniqueAllianceMemberIds.includes(allianceMemberId)) {
                    uniqueAllianceMemberIds.push(allianceMemberId);
                    const isTeamA = teams.teamA.includes(allianceMemberId);
                    const isTeamB = teams.teamB.includes(allianceMemberId);
                    let team = 'unknown';
                    if (isTeamA && isTeamB) {
                        team = 'A and B';
                    } else if (isTeamA) {
                        team = 'A';
                    } else if (isTeamB) {
                        team = 'B';
                    }
                    replyMessages.push({
                        type: 'text',
                        text: `${allianceMemberId} is on harpoon Team ${team}. See ${process.env.TMTR_HARPOON_GOOGLE_SPREADSHEET_URL} for the full list.`
                    });                    
                }
            }
        }

        if (entities.length > 5) {
            broadcastMessages.push({
                type: 'text',
                text: 'I can only show the teams for up to five alliance members 😢'
            });
        }

        return {
            replyMessages,
            broadcastMessages
        };
    });
};

module.exports = {
    handle,
    intentLabel,
    intentThreshold
};