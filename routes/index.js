const router = require('express').Router();
const userExtractor = require('../middlewares/userExtractor')

router.use('/usr', require('./user'));
router.use('/files', userExtractor, require('./files'));

module.exports = router