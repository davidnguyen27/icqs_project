const validation = require('../middleware/validation')
const db = require('../models');

let getBlogPage = async (req, res) => {
    try {
        const blog = await db.Blogs.findAll();
        if (blog == '') {
            return res.status(401).json({ error: 'Dont have any blog, please create new blog!' });
        }
        return res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let createBlog = async (req, res) => {
    const { title, user_id, image, content, role } = req.body;

    // Tạo một bài blog mới trong database
    try {
        const fileData = req.file;
        if (content == '' || title == '') {
            return res.status(401).json({ error: 'Content or title are not blank' });
        }
        const newBlog = await db.Blogs.create({
            title,
            user_id,
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

let detailBlog = async (req, res) => {
    try {
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters

        // Find the blog by id
        const blog = await db.Blogs.findOne({
            where: { id: blogId },
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


let hiddenBlog = async (req, res) => {
    try {
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters

        // Find the blog by id
        const blog = await db.Blogs.findOne({
            where: { id: blogId, status: 1 },
        });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        // blog.status = "0";

        await blog.update({ status: 0 });
        await blog.save;

        // Return the updated blog detail
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let updateBlog = async (req, res) => {
    const { title, image, content } = req.body;
    const { userId } = req.user;
    console.log("check id:", userId);
    try {
        const fileData = req.file;
        const blogId = req.params.id; // Assuming the blog id is passed in the request parameters
        if (content == '' || title == '') {
            return res.status(401).json({ error: 'Content or title are not blank' });
        }
        // Find the blog by id
        const blog = await db.Blogs.findOne({
            where: { id: blogId },
        });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        await blog.update({ user_id: userId, title, image:fileData.path, content });
        await blog.save;

        // Return the updated blog detail
        res.status(200).json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



module.exports = {
    getBlogPage, createBlog, detailBlog, hiddenBlog, updateBlog
}
