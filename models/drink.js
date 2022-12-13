const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema({
    name: {
        type: String
    },
    liquor: {
        type: String
    },
    details: {
        type: String
    }
})

module.exports = mongoose.model('Drink', drinkSchema)