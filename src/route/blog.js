const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authenToken, authenToken2, isAdmin, isStaff } = require('../middleware/JWT');
const upload = require('../middleware/upload');
    //Get all blog by admin
    router.get('/getBlogByAdmin', authenToken, isAdmin, blogController.getBlogByAdmin);
    //Get all blog by staff
    router.get('/getBlogByStaff', authenToken, isStaff, blogController.getBlogByStaff);
    //CRUD blog
    router.post('/createBlog',authenToken, upload.single('image'), blogController.createBlog);
    //detail blog by staff
    router.get('/detailBlogStaff/:id',authenToken, isStaff, blogController.detailBlogStaff);
    //detail blog by admin
    router.get('/detailBlogAdmin/:id',authenToken, isAdmin, blogController.detailBlogAdmin);
    //hidden and restore by admin
    router.put('/hiddenBlog/:id',authenToken,isAdmin, blogController.hiddenBlog);
    router.put('/restoreBlog/:id',authenToken,isAdmin, blogController.restoreBlog);
    //update by staff
    router.put('/updateBlogByStaff/:id',authenToken, isStaff, upload.single('image'), blogController.updateBlogByStaff);
    //update by staff
    router.put('/updateBlogByAdmin/:id',authenToken, isStaff, upload.single('image'), blogController.updateBlogByAdmin);
    router.post('/searchByTitle', blogController.searchByTitle);
module.exports = router
