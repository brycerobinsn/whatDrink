const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/users')

module.exports = {
    create,
    login
}

async function login(req, res) {
    try{
        const user = await User.findOne({name: req.body.name})
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        const token = createJWT(user)
        res.json(token)
    } catch {
        res.status(400).json('Bad Credentials')
    }
}

async function create(req,res){
    try{
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}

// Helper Functions
function createJWT(user) {
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    )
}