const express = require("express");
const router = express.Router();
const {
  postMarkdown
} = require("../controllers/mardown-controller");

router.post("/markdown", postMarkdown);

module.exports = router;