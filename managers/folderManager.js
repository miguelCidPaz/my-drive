const { v4 } = require('uuid');
const deleteFolder = require('../repositories/folder/deleteFolder');
const insertFolder = require('../repositories/folder/insertFolder');
const selectAllFoldersByIdUser = require('../repositories/folder/selectAllFoldersByIdUser');
const updateFolderNameById = require('../repositories/folder/updateFolderNameById');

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
    }

}

const renameFolderManager = async (new_name, id_folder) => {
    try {
        const folder = await selectFolderById(id_folder)
        folder.name = new_name
        await updateFolderNameById(id_folder, new_name)
        return new_name
    } catch (err) {
        console.log('renamefoldermanager');
        console.log(err);
    }
}

const deleteFolderManager = async (id_folder) => {
    try {
        await deleteFolder(id_folder)
        return true
    } catch (err) {
        console.log('deletefoldermanager');
        console.log(err);
    }
}

const getAllFoldersByIdUser = async (id_user) => {
    try {
        const folders = await selectAllFoldersByIdUser(id_user);
        return folders
    } catch (err) {
        console.log('getallfoldersbyiduser');
        console.log(err);
    }
}

module.exports = {
    createFolder,
    renameFolderManager,
    deleteFolderManager,
    getAllFoldersByIdUser
}