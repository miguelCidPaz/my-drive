const { login: loginUser } = require('../../managers/userManager')

const login = async (req, res, next) => {
    const response = await loginUser(req.body);
    res.status(200).json(response)
}

module.exports = login