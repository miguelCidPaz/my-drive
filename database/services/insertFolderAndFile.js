const fs = require('fs');
const { v4 } = require('uuid');
const insertFile = require('../../repositories/files/insertFile');
const insertFolder = require('../../repositories/folder/insertFolder')

const insertFolderAndFile = async (id) => {
    try {
        const newFolder = {
            id: v4(),
            id_user: id,
            name: 'carpeta del user de pruebas',
            location: './',
        }

        const newFile = {
            id: v4(),
            id_folder: newFolder.id,
            name: 'helloworld.txt'
        }

        const fileContent = 'Hello World!'
        const filePath = `./uploads/${newFile.id}.txt`

        fs.appendFile(filePath, fileContent, (err) => {
            if (err) throw err;

            console.log('Hola mundo del user de pruebas creado con exito')
        })

        await insertFolder(newFolder);
        console.log('Creada carpeta de pruebas...');
        console.log({ newFolder });

        await insertFile(newFile);
        console.log('Creado archivo de texto de pruebas...');
        console.log({ newFile });

    } catch (err) {
        console.log('insertFolderPruebas');
        console.log(err);
    }

}

module.exports = insertFolderAndFile