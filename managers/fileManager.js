const { v4 } = require('uuid');
const insertFile = require('../repositories/files/insertFile');
const selectFileById = require('../repositories/files/selectFileById');
const downloadFile = require('../services/downloadFile');
const removeFile = require('../services/removeFile');
const renameFile = require('../services/renameFile');
const selectFilesByIdFolder = require('../repositories/files/selectFilesByIdFolder')

const uploadFile = async (id_folder, file, id = v4()) => {
    const { originalname, filename } = file
    const ext = originalname.split('.')[1]

    if (!(originalname && filename)) {
        removeFile(filename)
        const error = new Error('error upload file')
        error.statusCode = 400
        throw error
    }

    const newFile = {
        id: id,
        id_folder: id_folder,
        name: name
    }

    await insertFile(newFile)


    renameFile(filename, `${id}.${ext}`);

    return newFile
}

const downloadFileManager = async (id_file) => {
    const fileDB = await selectFileById(id_file)
    const ext = fileDB.name.split('.')[1]
    const myFile = downloadFile(`${id_file}.${ext}`)
    return myFile
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

module.exports = {
    uploadFile,
    downloadFileManager,
    getAllFilesByIdFolder
}