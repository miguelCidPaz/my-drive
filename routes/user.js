const router = require('express').Router();

router.post('/register', require('../controllers/user/register'));
router.post('/login', require('../controllers/user/login'));
router.get('/reconnect', require('../controllers/user/reconnect'));
router.post('/modify', require('../controllers/user/modify'));

module.exports = router