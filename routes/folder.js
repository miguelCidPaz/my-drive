const router = require('express').Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/create-folder', upload.single('file'), require('../controllers/folders/createFolder'))
router.post('/rename', require('../controllers/folders/renameFolder'))

module.exports = router