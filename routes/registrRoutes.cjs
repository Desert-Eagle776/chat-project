const express = require('express');
const controller = require('../controllers/registrController.cjs');

const router = express.Router();
const urlencodedParser = express.urlencoded({ extended: false });

router.get('/', controller.registrGet);
router.post('/registr', urlencodedParser, controller.registrPost);

module.exports = router;