const { v4 } = require('uuid');
const insertFile = require('../repositories/files/insertFile');
const removeFile = require('../services/removeFile');
const renameFile = require('../services/renameFile');

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


    renameFile(filename, `${id}.${id}`);

    return newFile
}

module.exports = {
    uploadFile
}