const modify = async (req, res, next) => {
    const response = await modify(req.file, req.body)
    res.status(200).json('modificar usuario')
}

module.exports = modify