const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const followerSchema = new mongoose.Schema({
    followingID : {
        type: Schema.Types.ObjectId,
        ref : 'user',
        required: true,
    },
    followerID : {
        type: Schema.Types.ObjectId,
        ref : 'user',
        required: true,
    },
    createAt : {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('follower',followerSchema)