const { registerUser } = require('../../managers/userManager')

const register = async (req, res, next) => {
    try {
        const token = await registerUser(req.file, req.body)
        res.status(200).json(token)
    } catch (err) {
        next(err)
    }
}

module.exports = register