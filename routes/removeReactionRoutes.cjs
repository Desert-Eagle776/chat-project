const express = require('express');
const controller = require('../controllers/removeReactionController.cjs');

const router = express.Router();

router.post('/', controller.removeReactionPost);

module.exports = router;