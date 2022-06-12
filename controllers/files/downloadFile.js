const downloadFile = async (req, res, next) => {
    try {
        res.status(200).json('download - file')
    } catch (err) {
        next(err)
    }
}

module.exports = downloadFile