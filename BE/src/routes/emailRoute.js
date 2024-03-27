const express = require("express");
const router = express.Router();
const emailController = require("../controller/emailController");

router.post("/", emailController.sendEmail);
router.post("/verifyOtp", emailController.checkOtp);
module.exports = router;
