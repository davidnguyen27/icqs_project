const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const authenticateRole = require('../middleware/JWT')
const initWebRoute = (app) => {
    //Login
    router.get('/', accountController.getHomePage)
    router.post('/login', accountController.login)   
    //Register for user
    router.post('/registerPage', accountController.getRegisterPage)
    router.post('/register', accountController.Register)
    //

    //Admin create new staff account
    router.post('/createStaff', authenticateRole(['ADMIN', 'STAFF']), accountController.createStaff)
    router.get('/blogPage', accountController.getBlogPage);
    router.post('/createBlog', accountController.createBlog)
    return app.use("/", router);
}
module.exports = initWebRoute;
