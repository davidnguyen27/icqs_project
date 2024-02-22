const express = require('express');
const router = express.Router();
const galeryProjectController = require('../controllers/galeryProjectController');
const { authenToken, isAdmin, isStaff, isUser, isEx, isExist, authenToken2 } = require('../middleware/JWT');
const upload = require('../middleware/upload');
    // CRUD
    router.post('/createProject',authenToken2, isStaff, galeryProjectController.createProject);
    router.get('/detailProject/:id',authenToken, isStaff, galeryProjectController.detailProject);
    router.get('/getAllProject',authenToken2, isStaff, galeryProjectController.getAllProject);
    router.put('/updateProject/:id',authenToken2, isStaff, galeryProjectController.updateProject);
    router.post('/searchByName',authenToken2, isStaff, galeryProjectController.searchByName);
module.exports = router
