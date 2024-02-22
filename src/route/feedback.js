const express = require('express');
const router = express.Router();
const feedBackController = require('../controllers/feedBackController');
const { authenToken, isAdmin, isStaff, isUser, isEx, isExist, authenToken2} = require('../middleware/JWT');
const upload = require('../middleware/upload');
    // CRUD
    router.post('/createFeedBack/:id',authenToken2, isUser, feedBackController.createFeedBack);
    router.get('/getAllFeedBack', authenToken, isAdmin, feedBackController.getAllFeedBack);
    router.post('/hiddenFeedBack/:id', authenToken, isAdmin, feedBackController.hiddenFeedBack);
    router.put('/updateFeedBack/:id', authenToken2, isUser, feedBackController.updateFeedBack);
    // Restore
    router.post('/restoreFeedBack/:id', authenToken, isAdmin, feedBackController.restoreFeedBack);
    // sort feedback with positive/negative
    router.get('/positiveFeedBack', authenToken, isAdmin, feedBackController.positiveFeedBack);
    router.get('/negativeFeedBack', authenToken, isAdmin, feedBackController.negativeFeedBack);
    router.get('/getAllFeedBackByRating', authenToken2, isExist, feedBackController.getAllFeedBackByRating);
    // sort feedback with raitng


module.exports = router
