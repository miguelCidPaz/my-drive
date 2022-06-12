const getFiles = async (req, res, next) => {
    try {
        res.status(200).json('get files')
    } catch (err) {
        next(err)
    }
}

module.exports = getFiles