const { deleteFileManager } = require("../../managers/fileManager")

const deleteFile = async (req, res, next) => {

    try {
        await deleteFileManager(req.body)
        res.status(200).json('delete file')
    } catch (err) {
        next(err)
    }

}

module.exports = deleteFile