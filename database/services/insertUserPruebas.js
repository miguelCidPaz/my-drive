const { v4 } = require('uuid')
const insertUser = require('../../repositories/users/insertUser')

const insertUserPruebas = async () => {
    try {
        const newUser = {
            id: v4(),
            username: 'miguel',
            password: '1234',
            email: 'miguel.cid.paz@gmail.com',
            biography: 'soy el user de pruebas',
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