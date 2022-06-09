const getFiles = async (req, res, next) => {
    res.status(200).json('Recoge todos los files de un nivel')
}

module.exports = getFiles;