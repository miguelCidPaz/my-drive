const { v4 } = require('uuid')
const insertUser = require('../../repositories/users/insertUser')
const md5 = require('md5');

const insertUserPruebas = async () => {
    const psw = md5(1234)
    try {
        const newUser = {
            id: v4(),
            username: 'miguel',
            password: psw,
            email: 'miguel.cid.paz@gmail.com',
            biography: 'soy el user de pruebas',
            user_active: 1,
            photo: ''
        }

        await insertUser(newUser);
        console.log('Usuario de pruebas introducido con exito')
        console.log({ newUser });
        return newUser
    } catch (err) {
        console.log('insertUserPruebas');
        console.log(err);
        return false
    }

}

module.exports = insertUserPruebas