const mongoose = require('mongoose')
const Schema = mongoose.Schema
const drinkSchema = require('./drink')

const favoriteSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    favorites: [drinkSchema]
})

module.exports = mongoose.model('Favorite', favoriteSchema)