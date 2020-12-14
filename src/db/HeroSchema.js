const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const SpecialSchema = require('db/SpecialSchema');
const GradingSchema = require('db/GradingSchema');

const HeroSchema = new mongoose.Schema({
    heroId: {
        type: String,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        index: true
    },
    element: {
        type: String,
        required: true,
        index: true
    },
    family: {
        type: String,
        required: false,
        index: true
    },
    attack: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    pseudonyms: {
        type: [String]
    },
    stars: {
        type: Number,
        required: true,
        index: true
    },
    manaSpeed: {
        type: String,
        required: true,
        index: true
    },
    classGrade: {
        type: String,
        required: true,
        index: true
    },
    special: {
        type: SpecialSchema,
        required: true
    },
    grading: {
        type: GradingSchema,
        required: true
    }
});

HeroSchema.plugin(timestamps);

module.exports = HeroSchema;