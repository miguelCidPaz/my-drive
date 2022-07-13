const { createFolder: createFolderManager } = require('../../managers/folderManager')

const createFolder = async (req, res, next) => {
    try {
        const { id, location, name } = req.body
        console.log(req.body);
        const response = name ? await createFolderManager(id, location, name) : await createFolderManager(id, location)
        res.status(200).json(response)
    } catch (err) {
        console.log('createfolder');
        console.log(err);
        next(err)
    }
}

module.exports = createFolder