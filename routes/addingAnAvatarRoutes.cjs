const express = require('express');
const multer = require('multer');
const controller = require('../controllers/addingAnAvatarController.cjs');

const router = express.Router();
const upload = multer({ dest: 'tmp/' });

router.post('/', upload.single('file'), controller.addingAnAvatarPost);

module.exports = router;