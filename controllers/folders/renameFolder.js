const { renameFolderManager } = require("../../managers/folderManager");

const renameFolder = async (req, res, next) => {
    try {
        const { name, id_folder } = req.body
        const response = await renameFolderManager(name, id_folder)
        res.status(200).json({ new_name: response })
    } catch (err) {
        console.log('renameFolder');
        console.log(err);
        next(err)
    }
}

module.exports = renameFolder