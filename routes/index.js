const router = require('express').Router();

router.use('/usr', require('./user'));
router.use('/files', require('./files'));

module.exports = router