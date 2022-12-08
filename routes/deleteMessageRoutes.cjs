const express = require('express');
const controller = require('../controllers/deleteMessageController.cjs');

const router = express.Router();

router.get('/', controller.deleteMessageGet);

module.exports = router;