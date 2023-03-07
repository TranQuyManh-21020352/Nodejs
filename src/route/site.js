const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/Sitecontroller');

router.use('/slug', siteController.index);
router.use('/', siteController.index);

module.exports = router;
