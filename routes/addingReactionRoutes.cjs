const express = require('express');
const controller = require('../controllers/addingReactionController.cjs');

const router = express.Router();

router.post('/', controller.addingReactionPost);

module.exports = router;