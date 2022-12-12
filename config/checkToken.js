const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    // check for the token being sent in a header or as a query param
    let token = req.get('Authorization') || req.query.token
    if (token) {
        // remove bearer
        token = token.replace('Bearer', '')
        // check valid token
        jwt.verify(token, process.env.SECRET, function(err, decoded){

            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
    } else {
        req.user = null
        return next()
    }
}