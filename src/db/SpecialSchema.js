const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

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

SpecialSchema.plugin(timestamps);

module.exports = SpecialSchema;