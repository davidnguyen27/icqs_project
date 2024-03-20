const express = require('express')
const router = express.Router()
const accountController = require('../controllers/accountController');
const { authenToken, isAdmin, authenToken2, isStaff, isUser} = require('../middleware/JWT');;

    //Manage account by admin
    router.post('/createStaff', authenToken2, isAdmin, accountController.createStaff)
    router.get('/getStaffInfoByAdmin',authenToken, isAdmin, accountController.getStaffInfoByAdmin)
    router.get('/getUserInfoByAdmin',authenToken, isAdmin, accountController.getUserInfoByAdmin)
    router.get('/hiddenAccount/:id',authenToken, isAdmin, accountController.hiddenAccount)
    router.get('/restoreAccount/:id',authenToken, isAdmin, accountController.restoreAccount)
    //Register by user
    router.post('/register', accountController.register)
    
    // Update by staff
    router.put('/updateProfileByStaff',authenToken2, isStaff, accountController.updateProfile)
    // Update by user
    router.put('/updateProfileByUser',authenToken2, isUser, accountController.updateProfile)
    // Get user's infor
    router.get('/getUserInfor',authenToken, isUser, accountController.getInFor)
    // Get staff's infor
    router.get('/getStaffInfor',authenToken, isStaff, accountController.getInFor)

    router.put('/changePassword',authenToken2, isUser, accountController.changePassword);
    module.exports = router

