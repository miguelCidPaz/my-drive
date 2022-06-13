const modify = async (req, res, next) => {
    try {
        const response = await modify(req.file, req.body)
        res.status(200).json('modificar usuario')
    } catch (err) {
        next(err)
    }

}

module.exports = modify