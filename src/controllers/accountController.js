const validation = require('../middleware/validation')
const db = require('../models');
const hash = require('object-hash');
var md5 = require('md5');
// JWT
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createJWT, verifyToken } = require('../middleware/JWT')


const argon2 = require('argon2');

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
        // Check password có hợp lệ hay không
        if (validation.isValidPassword(password) == false) {
            return res.status(401).json({ error: 'Password must have a minimum length of 8 characters including upper and lower case letters and numbers!' });
        }
        // check email có hộp lệ hay không
        if (validation.isEmailValid(email) == false) {
            return res.status(401).json({ error: 'Email is not valid!' });
        }
        // check phone có hợp lệ hay không
        if (validation.isPhoneNumber(phone) == false) {
            return res.status(401).json({ error: 'Phone numbers cannot contain letters, special characters or spaces' });
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
        const hashedPass = hash.MD5(password)
        const newAccount = await db.Account.create({ username, password: hashedPass, email, phone });
        res.status(200).json(newAccount);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//login function
const login = async (req, res) => {

    // const dataUser = req.body;
    const { email, password} = req.body;
    try {

        // Kiểm tra xem tài khoản tồn tại
        const hashedPass = hash.MD5(password)
        const user = await db.Account.findOne({
            where: { email, password: hashedPass}
        });

        if (!user) {
            return res.status(401).json({ error: 'Email, passowrd invalid!' });
        }
        const loginToken =  jwt.sign({userId: user.id, role: user.role}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '7d'});
        // const loginToken = createJWT(dataUser);
        res.status(200).json({
            message: 'Login successful',
            user:user,
            loginToken,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Sever err' });
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
        const hashedPass = hash.MD5(password)
        const newAccount = await db.Account.create({ username, password: hashedPass, email, phone, role });
        res.status(201).json(newAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getHomePage, login, Register, getRegisterPage, createStaff
}
