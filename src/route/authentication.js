
const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');
const { authenToken} = require('../middleware/JWT');;

    // Login
    router.post('/login', authController.login, )   
    //Admin create new staff account
    router.get('/logout', authController.logout);
    module.exports = router


   
    
    
    
    
