const { v4 } = require('uuid')
const { CLAVE_JWT } = require('../config')
const removeFile = require('../services/removeFile')
const insertUser = require('../repositories/users/insertUser')
const renameFile = require('../services/renameFile')
const jwt = require('jsonwebtoken')
const selectUserByName = require('../repositories/users/selectUserByName')
const selectUserByNameAndPassword = require('../repositories/users/selectUserByNameAndPassword')
const selectUserById = require('../repositories/users/selectUserById')
const updateUser = require('../repositories/users/updateUser')

/**
 * Recibimos usuario y avatar del usuario, aprovechamos para tratar ambos
 * 
 * @param {*} file Avatar del usuario, necesitamos tratarlo para incluirlo en su perfil
 * @param {*} user Datos del User
 * @returns 
 */
const registerUser = async (file, user) => {
    const { username, password, email } = user
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

        if (await selectUserByName(username)) {
            const error = new Error('name in use')
            error.statusCode = 400
            throw error
        }

        await insertUser(newUser);
        const userForToken = {
            id: newUser.id,
            username: newUser.username,
        }

        const token = jwt.sign(userForToken, CLAVE_JWT, { expiresIn: '7d' })

        return { id: newUser.id, username: newUser.username, token: token }
    } catch (err) {
        console.log('registerUser');
        console.log(err);
    }
}

const login = async ({ username, password }) => {

    try {
        const user = await selectUserByNameAndPassword(username, password)
        const userForToken = {
            id: user.id,
            username: user.username,
        }
        const token = jwt.sign(userForToken, CLAVE_JWT, { expiresIn: '7d' })
        console.log(token);
        return user ? { userForToken, token } : false
    } catch (err) {
        console.log('login');
        console.log(err);
    }

}

const modifyUser = async (file, user) => {
    try {
        const { id, username, password, email, biography, photo, user_active } = user

        if (file) {
            const { filename } = file
            if (fs.existsSync(`./uploads/photo`)) {
                removeFile(photo)
                renameFile(filename, photo)
            }
        }

        const userdb = await selectUserById(id);
        const newUser = {
            id: id,
            username: username | userdb.username,
            password: password | userdb.password,
            email: email | userdb.email,
            biography: biography | userdb.biography,
            user_active: user_active === undefined ? 1 : userdb.user_active
        }

        await updateUser(newUser)
        const userForToken = { id: newUser.id, username: newUser.name }
        const token = jwt.sign(userForToken, CLAVE_JWT, { expiresIn: '7d' })
        return { user: userForToken, token: token }

    } catch (err) {
        console.log('modifyUser');
        console.log(err);
    }
}

module.exports = {
    registerUser,
    login,
    modifyUser
}