const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const { authenToken, authenToken2, isUser } = require('../middleware/JWT');
const upload = require('../middleware/upload');
router.post('/sendEmail', emailController.sendEmail)
module.exports = router