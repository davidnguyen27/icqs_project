const validation = require('../public/js/validation')
const db = require('../models');

let getBlogPage = async (req, res) => {
        try {
          const blog = await db.Blogs.findAll();
        //   res.status(200).json({
        //     message: 'Login successful',
        //     blog: {
        //         title: blog.title,
        //         user_id: blog.user_id,
        //         image: blog.image,
        //         content: blog.content,
        //         role: blog.role
        //     },
        // });
        res.status(200).json(blog);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
}
module.exports = {
    getBlogPage,
}
