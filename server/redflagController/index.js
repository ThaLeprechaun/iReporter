const express = require("express");
const redflag = require("./redflagController");

const router = express.Router();
router.use(express.json());

router.get("/", redflag.getAllRedflags);
router.get("/:redflagId", redflag.getSingleRedflag);
router.post("/", redflag.createRedflag);
router.delete("/:redflagId", redflag.deleteRedflag);
router.patch("/:redflagId/location", redflag.updateRedflagLocation);
router.patch("/:redflagId/comment", redflag.updateRedflagComment);

module.exports = router;
