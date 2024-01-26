const validation = require('../public/js/validation')
const db = require('../models');
const hash = require('object-hash');

// const md5 = require('md5');
let getHomePage = async (req, res) => {
    return res.render('index.ejs');
}
let getRegisterPage = async (req, res) => {
    return res.render('register.ejs');
}
//Register
const Register = async (req, res) => {
    try {
        const { username, password, email, phone } = req.body;
        // check phone có hợp lệ hay không
        if (validation.isPhoneNumber(phone) == false) {
            return res.status(401).json({ error: 'Phone numbers cannot contain letters, special characters or spaces' });
        }
        // check email có hộp lệ hay không
        if (validation.isEmailValid(email) == false) {
            return res.status(401).json({ error: 'Email is not valid!' });
        }
        // check đã tồn tại
        const userMail = await db.Account.findOne({
            where: { email },
        })
        const userPhone = await db.Account.findOne({
            where: { phone },
        })
        //check email or phone of user has been used or not
        if (userMail || userPhone) {
            return res.status(401).json({ error: 'email or phone has been used' });
        }
        // const hashedPass = hash.MD5(password)
        // console.log('check pass:', password)
        // console.log('check hashpass:', hashedPass)

        const newAccount = await db.Account.create({ username, password, email, phone });
        res.status(201).json(newAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//login function
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Kiểm tra xem tài khoản tồn tại
        const user = await db.Account.findOne({
            where: { email, password }
        });
        console.log('check user: ', user)
        if (!user) {
            return res.status(401).json({ error: 'Email or passowrd invalid!' });
        }
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
                email: user.email,
                phone: user.phone
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'User not found!' });
    }
}

// Staff is created by Admin
const createStaff = async (req, res) => {
    try {
        const { roleAdmin, username, password, email, phone, role } = req.body;
        if (roleAdmin != 'ADMIN') {
            return res.status(401).json({ error: 'You are not ADMIN!' });
        }
        // check phone có hợp lệ hay không
        if (validation.isPhoneNumber(phone) == false) {
            return res.status(401).json({ error: 'Phone numbers cannot contain letters, special characters or spaces' });
        }
        // check email có hộp lệ hay không
        if (validation.isEmailValid(email) == false) {
            return res.status(401).json({ error: 'Email is not valid!' });
        }
        // check đã tồn tại
        const userMail = await db.Account.findOne({
            where: { email },
        })
        const userPhone = await db.Account.findOne({
            where: { phone },
        })
        //check email or phone of user has been used or not
        if (userMail || userPhone) {
            return res.status(401).json({ error: 'email or phone has been used' });
        }
        // const hashedPass = hash.MD5(password)
        // console.log('check pass:', password)
        // console.log('check hashpass:', hashedPass)
        const newAccount = await db.Account.create({ username, password, email, phone, role });
        res.status(201).json(newAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//blog
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
    const newBlog = await Blogs.create({
        title,
        user_id,
        image,
        content,
        role,
    });
    res.status(201).json(newBlog);
}

module.exports = {
    getHomePage, login, Register, getRegisterPage, createStaff, getBlogPage, createBlog
}
