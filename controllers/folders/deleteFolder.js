const { deleteFolderManager } = require("../../managers/folderManager");

const deleteFolder = async (req, res, next) => {
    try {
        const response = await deleteFolderManager(req.body.id_folder)
        if (response) res.status(200).json('folder deleted!')
        res.status(404).json('folder not found')
    } catch (err) {
        console.log('deletefolder');
        console.log(err);
        next(err)
    }

}

module.exports = deleteFolder