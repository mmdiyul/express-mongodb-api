const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    }
})

module.exports = mongoose.model('User', UserSchema)