const { moveFileManager } = require("../../managers/fileManager")

const moveFile = async (req, res, next) => {
    try {
        await moveFileManager(req.body)
        res.status(200).json('file moved')
    } catch (err) {
        next(err)
    }
}

module.exports = moveFile