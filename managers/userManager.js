const { v4 } = require('uuid')
const removeFile = require('../services/removeFile')
const insertUser = require('../repositories/users/insertUser')
const renameFile = require('../services/renameFile')

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
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    registerUser
}