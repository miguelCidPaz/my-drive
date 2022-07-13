
const jwt = require('jsonwebtoken');
const { CLAVE_JWT } = require('../config');

module.exports = (req, res, next) => {
    let authorization, decodedToken, token

    try {
        authorization = req.get('authorization')
        if (authorization && authorization.toLowerCase().startsWith('bearer')) {
            token = authorization.split(' ')[1]
        }
        decodedToken = jwt.verify(token, CLAVE_JWT)
    } catch (e) {
        return res.status(404).json({ error: 'not token' })
    }

    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const { id, username } = decodedToken

    req.body.id = id
    req.body.username = username

    next();
}