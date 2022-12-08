const express = require('express');
const controller = require('../controllers/changeMessageController.cjs');

const router = express.Router();
const urlencodedParser = express.urlencoded({ extended: false });

router.get('/', controller.changeMessageGet);
router.post('/', urlencodedParser, controller.changeMessagePost);

module.exports = router;