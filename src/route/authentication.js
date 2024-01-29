// JWT

const express = require('express')
const router = express.Router()
const accountController = require('../controllers/accountController');
const authenticateRole = require('../middleware/JWT')
const blogController = require('../controllers/blogController');
    router.get('/', accountController.getHomePage)
    // Login
    router.post('/login', accountController.login,
       
    )   
    //Register for user
    router.post('/registerPage', accountController.getRegisterPage)
    router.post('/register', accountController.Register)
    //Admin create new staff account
    router.post('/createStaff', accountController.createStaff)
    module.exports = router


   
    
    
    
    
