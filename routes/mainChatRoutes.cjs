const express = require('express');
const controller = require('../controllers/mainChatController.cjs');

const router = express.Router();

router.get('/', controller.mainChatGet);

module.exports = router;