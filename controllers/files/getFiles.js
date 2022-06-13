const { getAllFilesByIdFolder } = require('../../managers/fileManager')

const getFiles = async (req, res, next) => {
    try {
        const files = await getAllFilesByIdFolder(req.params.id_folder)
        res.status(200).json(files)
    } catch (err) {
        next(err)
    }
}

module.exports = getFiles