const reconnect = (req, res, next) => {
    try {
        res.status(200).json({ id: req.body.id, username: req.body.username })
    } catch (err) {
        next(err)
    }
}

module.exports = reconnect