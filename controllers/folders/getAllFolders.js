const { getAllFoldersByIdUser } = require("../../managers/folderManager");

const getAllFolders = async (req, res, next) => {
    try {
        const folders = await getAllFoldersByIdUser(req.params.id_user)
        res.status(200).json(folders)
    } catch (err) {
        console.log('getallfolders');
        console.log(err);
        next(err)
    }
}

module.exports = getAllFolders