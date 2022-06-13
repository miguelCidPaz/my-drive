const { downloadFileManager } = require("../../managers/fileManager")

const downloadFile = async (req, res, next) => {
    try {
        const file = await downloadFileManager(req.params.id_file)
        res.status(200).sendFile(file, { root: './uploads/' }, (err) => {
            if (err) throw err
        })
    } catch (err) {
        next(err)
    }
}

module.exports = downloadFile