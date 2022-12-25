const express = require('express');
const { generateImage } = require('../controllers/openaicontroller')
const router = express.Router();

router.post('/generateimage', generateImage);

module.exports = router;