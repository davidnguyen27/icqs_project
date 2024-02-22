const validation = require('../middleware/validation')
const db = require('../models');
const { Op } = require('sequelize');

const createBlog = async (req, res) => {
    const { title, image, content } = req.body;
    const { userId, role } = req.user;
    // Tạo một bài blog mới trong database
    try {
        const fileData = req.file;
        if (content == '' || title == '') {
            return res.status(401).json({ error: 'Content or title are not blank' });
        }
        const newBlog = await db.Blogs.create({
            title,
            user_id: userId,
            image: fileData.path,
            content,
            role,
        });
        res.status(201).json(newBlog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const detailBlogStaff = async (req, res) => {
    try {
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters

        // Find the blog by id
        const blog = await db.Blogs.findOne({
            where: { id: blogId, role: "STAFF" },
        });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        // Return the blog detail
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const detailBlogAdmin = async (req, res) => {
    try {
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters

        // Find the blog by id
        const blog = await db.Blogs.findOne({
            where: { id: blogId},
        });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        // Return the blog detail
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const hiddenBlog = async (req, res) => {
    try {
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters
        const { userId } = req.user;
        // Find the blog by id
        const blog = await db.Blogs.findOne({
            where: { id: blogId, status: 1 },
        });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        // blog.status = "0";

        await blog.update({ status: 0, user_id:userId });
        await blog.save;

        // Return the updated blog detail
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const restoreBlog = async (req, res) => {
    try {
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters
        const { userId } = req.user;
        // Find the blog by id
        const blog = await db.Blogs.findOne({
            where: { id: blogId, status: 0 },
        });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        // blog.status = "0";

        await blog.update({ status: 1, user_id:userId });
        await blog.save;

        // Return the updated blog detail
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateBlogByStaff = async (req, res) => {
    const { title, image, content } = req.body;
    const { userId, role } = req.user;
    const fileData = req.file;
        if (content == '' || title == '') {
            return res.status(401).json({ error: 'Content or title are not blank' });
        }
    try {
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters
        if (content == '' || title == '') {
            return res.status(401).json({ error: 'Content or title are not blank' });
        }
        // Find the blog by id and role
        const blog = await db.Blogs.findOne({
            where: { id: blogId, role: role },
        });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        await blog.update({ user_id: userId, title, image: fileData.path, content });
        await blog.save;

        // Return the updated blog detail
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateBlogByAdmin = async (req, res) => {
    const { title, image, content } = req.body;
    const { userId } = req.user;
    const fileData = req.file;
        if (content == '' || title == '') {
            return res.status(401).json({ error: 'Content or title are not blank' });
        }
    try {
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters
        if (content == '' || title == '') {
            return res.status(401).json({ error: 'Content or title are not blank' });
        }
        // Find the blog by id and role
        const blog = await db.Blogs.findOne({
            where: { id: blogId },
        });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        await blog.update({ user_id: userId, title, image: fileData.path, content });
        await blog.save;

        // Return the updated blog detail
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getBlogByAdmin = async (req, res) => {
    try {
        const blog = await db.Blogs.findAll({
            where: {status:1}
        });
        if (blog == '') {
            return res.status(401).json({ error: 'Dont have any blog, please create new blog!' });
        }
        return res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getBlogByStaff = async (req, res) => {
    const {  role } = req.user;
    try {
        const blog = await db.Blogs.findAll({
            where: { role: role, status:1}
        });
        if (blog == '') {
            return res.status(401).json({ error: 'Dont have any blog, please create new blog!' });
        }
        return res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const searchByTitle = async (req, res) => {
    const {keyword} = req.body;
    try {
        const blog = await db.Blogs.findAll({
            where: { 
                title: {
                    [Op.like]: `%${keyword}%`
                  }
             }
        });
        if (blog == '') {
            return res.status(401).json({ error: 'Could not find blog title containing keywords' + keyword });
        }
        return res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createBlog, detailBlogStaff, detailBlogAdmin, hiddenBlog, updateBlogByStaff,updateBlogByAdmin, restoreBlog, getBlogByAdmin, getBlogByStaff, searchByTitle
}
