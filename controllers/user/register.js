const { registerUser } = require('../../managers/userManager')

const register = async (req, res, next) => {
    try {
        await registerUser(req.file, req.body)
        res.status(200).json('registro')
    } catch (err) {
        next(err)
    }
}

module.exports = register