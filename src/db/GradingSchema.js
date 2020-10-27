const mongoose = require('mongoose');

const titanGradeSchema = new mongoose.Schema({
    stamina: {
        type: String
    },
    passive: {
        type: String
    },
    direct: {
        type: String
    },
    tiles: {
        type: String
    },
    vers: {
        type: String
    },
    overall: {
        type: String
    }
});

const offenseGradeSchema = new mongoose.Schema({
    speed: {
        type: String
    },
    stamina: {
        type: String
    },
    passive: {
        type: String
    },
    direct: {
        type: String
    },
    war: {
        type: String
    },
    overall: {
        type: String
    }
});

const defenseGradeSchema = new mongoose.Schema({
    speed: {
        type: String
    },
    stamina: {
        type: String
    },
    passive: {
        type: String
    },
    direct: {
        type: String
    },
    tank: {
        type: String
    },
    flank: {
        type: String
    },
    wing: {
        type: String
    },
    overall: {
        type: String
    }
});

const weeklyRaidTournamentGradeSchema = new mongoose.Schema({
    rush: {
        type: String
    },
    buff: {
        type: String
    },
    bloody: {
        type: String
    }
});

const GradingSchema = new mongoose.Schema({
    titanGrade: {
        type: titanGradeSchema,
        required: true
    },
    offenseGrade: {
        type: offenseGradeSchema,
        required: true
    },
    defenseGrade: {
        type: defenseGradeSchema,
        required: true
    },
    weeklyRaidTournamentGrade: {
        type: weeklyRaidTournamentGradeSchema,
        required: true
    },
    overallGrade: {
        type: String
    }
});

module.exports = GradingSchema;