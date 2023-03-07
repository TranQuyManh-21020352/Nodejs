const express = require('express');
const router = express.Router();

const courseController = require('../app/controller/Coursecontroller');

router.use('/:slug', courseController.show);

module.exports = router;
