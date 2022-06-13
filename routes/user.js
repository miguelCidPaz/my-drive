const router = require('express').Router();
const userExtractor = require('../middlewares/userExtractor')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/register', upload.single('photo'), require('../controllers/user/register'));
router.post('/login', require('../controllers/user/login'));
router.get('/reconnect', require('../controllers/user/reconnect'));
router.post('/modify', require('../controllers/user/modify'));

module.exports = router