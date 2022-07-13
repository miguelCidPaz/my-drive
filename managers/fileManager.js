const { v4 } = require('uuid');
const insertFile = require('../repositories/files/insertFile');
const selectFileById = require('../repositories/files/selectFileById');
const downloadFile = require('../services/downloadFile');
const removeFile = require('../services/removeFile');
const renameFile = require('../services/renameFile');
const selectFilesByIdFolder = require('../repositories/files/selectFilesByIdFolder');
const deleteFile = require('../repositories/files/deleteFile');
const updateFile = require('../repositories/files/updateFile');

const uploadFile = async (id_folder, file) => {
    const id = v4();
    try {
        const { originalname, filename } = file
        const ext = originalname.split('.')[1]

        if (!(originalname)) {
            removeFile(filename)
            const error = new Error('error upload file')
            error.statusCode = 400
            throw error
        }

        const newFile = {
            id: id,
            id_folder: id_folder,
            name: `${id}.${ext}`
        }

        await insertFile(newFile)


        renameFile(filename, newFile.name);

        console.log({ newFile });

        return newFile
    } catch (err) {
        console.log('uploadFile');
        console.log(err);
    }

}

const downloadFileManager = async (id_file) => {
    const fileDB = await selectFileById(id_file)
    const ext = fileDB.name.split('.')[1]
    const file = downloadFile(`${id_file}.${ext}`)
    return file
}


const getAllFilesByIdFolder = async (id_folder) => {
    try {
        const folderdb = await selectFilesByIdFolder(id_folder)
        return folderdb
    } catch (err) {
        console.log('getallfilesbyidfolder');
        console.log(err);
    }
}

const deleteFileManager = async ({ id_file, name }) => {
    try {
        const fullNameFile = `${id_file}.${name.split('.')[1]}`
        removeFile(fullNameFile)
        await deleteFile(id_file)
    } catch (err) {
        console.log('deletefilemanager');
        console.log(err);
    }
}

const moveFileManager = async ({ id_folder, id_file }) => {
    try {
        await updateFile(id_folder, id_file)
    } catch (err) {
        console.log('movefile');
        console.log(err);
    }
}

module.exports = {
    uploadFile,
    downloadFileManager,
    getAllFilesByIdFolder,
    deleteFileManager,
    moveFileManager
}