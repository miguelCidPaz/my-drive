const { login: loginUser } = require('../../managers/userManager')

const login = async (req, res, next) => {
    console.log(req.body);
    try {
        const response = await loginUser(req.body);
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = login