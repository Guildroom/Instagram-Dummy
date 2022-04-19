const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
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
    postID : {
        type: Schema.Types.ObjectId,
        ref : 'post',
        required: true,
    },
    createAt : {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('comment',commentSchema)