const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authenToken, isAdmin } = require('../middleware/JWT');

    router.get('/blogPage',authenToken, isAdmin, blogController.getBlogPage);
    router.post('/createBlog', blogController.createBlog);
    router.post('/detailBlog/:id', blogController.detailBlog);
    router.put('/hiddenBlog/:id', blogController.hiddenBlog);
module.exports = router
