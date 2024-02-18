const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authenToken, isAdmin, isStaff } = require('../middleware/JWT');
const upload = require('../middleware/upload');


    router.get('/blogPage', authenToken, isAdmin, blogController.getBlogPage);
    router.post('/createBlog',authenToken, upload.single('image'), blogController.createBlog);
    router.post('/detailBlog/:id', blogController.detailBlog);
    router.put('/hiddenBlog/:id', blogController.hiddenBlog);
    router.put('/updateBlog/:id',authenToken, isStaff, upload.single('image'), blogController.updateBlog);
module.exports = router
