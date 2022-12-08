const express = require('express');
const controller = require('../controllers/authController.cjs');

const router = express.Router();
const urlencodedParser = express.urlencoded({ extended: false });

router.get('/', controller.authGet);
router.post('/', urlencodedParser, controller.authPost);

module.exports = router;