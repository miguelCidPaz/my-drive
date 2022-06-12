const reconnect = (req, res, next) => {
    res.status(200).json({ id: req.id, username: req.username })
}

module.exports = reconnect