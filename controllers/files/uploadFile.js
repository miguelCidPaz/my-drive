const { uploadFile: uploadFileManager } = require('../../managers/fileManager')

const uploadFile = async (req, res, next) => {
    try {
        const { id_folder, id } = req.body;
        console.log(req.file);
        const response = await uploadFileManager(id_folder, req.file, id)
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = uploadFile