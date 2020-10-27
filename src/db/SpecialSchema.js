const mongoose = require('mongoose');

const SpecialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: [String],
        required: true
    }
});

module.exports = SpecialSchema;