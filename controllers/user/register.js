const { uploadFile } = require('../../managers/fileManager');
const { createFolder } = require('../../managers/folderManager')
const { registerUser } = require('../../managers/userManager')

const register = async (req, res, next) => {
    try {
        const { id, token } = await registerUser(req.file, req.body)
        const id_folder = await createFolder(id, './');
        await uploadFile(id_folder, req.file, id)
        res.status(200).json(token)
    } catch (err) {
        next(err)
    }
}

module.exports = register