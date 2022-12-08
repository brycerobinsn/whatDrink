const jwt = require('jsonwebtoken')
const User = require('../../models/users')

module.exports = {
    create
}

async function create(req,res){
    try{
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch {
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