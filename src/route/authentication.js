// JWT

const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');
const { authenToken, logout} = require('../middleware/JWT');;
    router.get('/', authController.getHomePage)
    // Login
    router.post('/login', authController.login,
    )   
    //Register for user
    router.post('/registerPage', authController.getRegisterPage)
    router.post('/register', authController.Register)
    //Admin create new staff account
    router.post('/createStaff', authController.createStaff)
    router.get('/logout', logout);
    module.exports = router


   
    
    
    
    
