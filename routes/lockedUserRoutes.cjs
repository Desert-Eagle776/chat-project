const express = require('express');
const controller = require('../controllers/lockedUserController.cjs');

const router = express.Router();

router.get('/', controller.lockedUserGet);

module.exports = router;