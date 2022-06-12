const { v4 } = require('uuid');
const insertFolder = require('../repositories/folder/insertFolder');

/**
 * Crea un folder que agrupara files
 * 
 * @param {*} idUser id del usuario 
 * @param {*} location localizacion de la carpeta
 * @param {*} name nombre dado a la carpeta, por default basic folder
 * @returns 
 */
const createFolder = async (idUser, location, name = 'basic folder') => {
    const id = v4();
    try {
        const newFolder = {
            id: id,
            id_user: idUser,
            name: name,
            location: location
        }

        await insertFolder(newFolder)
        return id
    } catch (err) {
        console.log('createFolder');
        console.log(err);
        return false
    }

}

module.exports = {
    createFolder
}