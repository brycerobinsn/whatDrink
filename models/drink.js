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
    },
    ingredients: {
        type: String
    },
    image: {
        type: File
    }
})

module.exports = mongoose.model('Drink', drinkSchema)