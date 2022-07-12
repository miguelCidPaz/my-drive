const { downloadFileManager } = require("../../managers/fileManager")

const downloadFile = async (req, res, next) => {
    try {
        const file = await downloadFileManager(req.params.id_file)
        console.log({ file });
        res.status(200).download(file)
    } catch (err) {
        next(err)
    }
}

module.exports = downloadFile