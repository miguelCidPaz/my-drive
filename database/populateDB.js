const insertUserPruebas = require('./services/insertUserPruebas')
const insertFolderAndFile = require('./services/insertFolderAndFile')

const populateDB = async () => {

    const poblateUserDB = await insertUserPruebas();
    const poblateFolderDB = await insertFolderAndFile(poblateUserDB.id);


}

module.exports = populateDB