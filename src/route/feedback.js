const express = require('express');
const router = express.Router();
const feedBackController = require('../controllers/feedBackController');
const { authenToken, isAdmin, isStaff, isCustomer, isEx, isExist } = require('../middleware/JWT');
const upload = require('../middleware/upload');
    // CRUD
    router.post('/createFeedBack',authenToken, isCustomer, feedBackController.createFeedBack);
    router.get('/getAllFeedBack', authenToken, isAdmin, feedBackController.getAllFeedBack);
    router.get('/hiddenFeedBack/:id', authenToken, isAdmin, feedBackController.hiddenFeedBack);
    router.put('/updateFeedBack/:id', authenToken, isCustomer, feedBackController.updateFeedBack);
    // Restore
    router.get('/restoreFeedBack/:id', authenToken, isAdmin, feedBackController.restoreFeedBack);
    // sort feedback with positive/negative
    router.get('/positiveFeedBack', authenToken, isAdmin, feedBackController.positiveFeedBack);
    router.get('/negativeFeedBack', authenToken, isAdmin, feedBackController.negativeFeedBack);
    // sort feedback with raitng
    router.post('/getAllFeedBackByRating', authenToken, isExist, feedBackController.getAllFeedBackByRating);

module.exports = router
