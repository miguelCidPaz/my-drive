const router = require('express').Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/upload-file', upload.single('file'), require('../controllers/files/uploadFile'))
router.get('/download/:id_file', require('../controllers/files/downloadFile'));
router.get('/all/:id_folder', require('../controllers/files/getFiles'));
router.post('/move-file', require('../controllers/files/moveFile'))
router.post('/delete-file', require('../controllers/files/deleteFile'))

module.exports = router