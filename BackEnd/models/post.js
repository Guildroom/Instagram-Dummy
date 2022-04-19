const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    userID : {
        type: Schema.Types.ObjectId,
        ref : 'user',
        required: true,
    },
    caption : {
        type: String,
        required: true,
        default:" ",
    },
    Image : {
        type: String,
        required: true,
        default: " ",
    },
    createAt : {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('post',postSchema)