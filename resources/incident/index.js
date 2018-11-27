const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/", require("./all"));

module.exports = router;
