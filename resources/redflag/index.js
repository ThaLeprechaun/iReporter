const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/", require("./all"));
router.get("/:redflagId", require("./single"));
router.post("/", require("./create"));
router.delete("/:redflagId", require("./delete"));

module.exports = router;
