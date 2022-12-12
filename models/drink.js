const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema({
    title: {
        type: String
    },
    liquor: {
        type: String
    },
    details: {
        type: String
    },
    ingredients: {
        type: String
    }
})

module.exports = mongoose.model('Drink', drinkSchema)