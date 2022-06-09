const router = require('express').Router();

router.get('/download', require('../controllers/files/downloadFile'));
router.get('/all', require('../controllers/files/getFiles'));
router.post('/upload', require('../controllers/files/uploadFile'));
router.post('/create-folder/:name', require('../controllers/files/createFolder'))

module.exports = router