const express = require('express');
const multer = require('multer');
const controller = require('../controllers/userChatController.cjs');

const router = express.Router();
const upload = multer({ dest: 'tmp/' });

router.get('/', controller.userChatGet);
router.post('/', upload.single('file'), controller.userChatPost);

module.exports = router;