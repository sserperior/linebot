const logger = require('logger');
const GoogleSpreadsheet = require('google-spreadsheet');

const intentLabel = 'harpoon.team.query';
const intentThreshold = parseFloat(process.env.HARPOON_TEAM_QUERY_INTENT_THRESHOLD || 0.8);

const getHarpoonTeams = () => {
    const doc = new GoogleSpreadsheet(process.env.TMTR_HARPOON_GOOGLE_SPREADSHEET_KEY);
    return new Promise((resolve, reject) => {
        doc.getInfo((err, info) => {
            if (err) {
                reject(err);
            }
            const harpoonsWorksheet = info.worksheets[0];
            const teamA = [];
            const teamB = [];
            harpoonsWorksheet.getRows({}, (err, rows) => {
                if (err) {
                    reject(err);
                }
                rows.forEach(row => {
                    teamA.push(row.teama);
                    teamB.push(row.teamb);
                });
                resolve({
                    teamA,
                    teamB
                });
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