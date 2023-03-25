const express = require("express");
const {
  generateImage,
} = require("../../functions/controllers/openaicontroller");
const router = express.Router();

router.post("/generateimage", generateImage);

module.exports = router;
