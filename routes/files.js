const router = require('express').Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/download/:id_file', upload.single('file'), require('../controllers/files/downloadFile'));
router.get('/all/:id_folder', require('../controllers/files/getFiles'));
router.post('/upload-file', require('../controllers/files/uploadFile'))

module.exports = router