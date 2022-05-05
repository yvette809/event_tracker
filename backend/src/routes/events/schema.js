const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date(),
        required: true
    },
    time: {
        type: String,
        required: true
    }
})


const eventModel = mongoose.model("event", eventSchema)
module.exports = eventModel