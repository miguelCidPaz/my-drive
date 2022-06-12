const { uploadFile: uploadFileManager } = require('../../managers/fileManager')

const uploadFile = async (req, res, next) => {
    try {
        const { id_folder } = req.body
        const response = uploadFileManager(id_folder, req.file)
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = uploadFile