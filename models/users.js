const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{type: String, required: true},
    email:{
        type: String,
        unique: true,
        trime: true,
        lowercase:true,
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)