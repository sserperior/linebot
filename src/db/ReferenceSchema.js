const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const ReferenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

ReferenceSchema.plugin(timestamps);

module.exports = ReferenceSchema;