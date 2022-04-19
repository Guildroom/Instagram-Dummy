const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const comment2Schema = new mongoose.Schema({
    userID : {
        type: Schema.Types.ObjectId,
        ref : 'user',
        required: true,
    },
    comment : {
        type: String,
        required: true,
        default:" ",
    },
    commentID : {
        type: Schema.Types.ObjectId,
        ref : 'comment',
        required: true,
    },
    createAt : {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('comment2',comment2Schema)