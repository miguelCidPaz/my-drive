const { v4 } = require('uuid')
const { CLAVE_JWT } = require('../config')
const removeFile = require('../services/removeFile')
const insertUser = require('../repositories/users/insertUser')
const renameFile = require('../services/renameFile')
const jwt = require('jsonwebtoken')

const registerUser = async (file, user) => {
    const { username, password, email, biography } = user
    const { originalname, filename } = file

    const ext = originalname.split('.')[1]
    const id = v4();
    const newUser = {
        id: id,
        ...user,
        photo: `${id}.${ext}`
    }

    try {
        if (!(username && password && email)) {
            removeFile(filename)
            const error = new Error('incomplete user')
            error.statusCode = 400
            throw error
        }

        await insertUser(newUser);
        renameFile(filename, newUser.photo);

        const userForToken = {
            id: newUser.id,
            username: newUser.username,
        }

        const token = jwt.sign(userForToken, CLAVE_JWT, { expiresIn: '7d' })

        return token
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    registerUser
}