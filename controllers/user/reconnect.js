const reconnect = (req, res, next) => {
    try {
        res.status(200).json({ id: req.id, username: req.username })
    } catch (err) {
        next(err)
    }
}

module.exports = reconnect