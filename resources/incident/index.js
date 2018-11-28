const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/", require("./all"));
router.get("/:incidentId", require("./single"));

module.exports = router;
