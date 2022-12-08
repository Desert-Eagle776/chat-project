const express = require('express');
const controller = require('../controllers/unlockUserController.cjs');

const router = express.Router();

router.get('/', controller.unlockUserGet);

module.exports = router;