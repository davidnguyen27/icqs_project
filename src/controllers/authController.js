const validation = require('../middleware/validation')
const db = require('../models');
const hash = require('object-hash');
var md5 = require('md5');
// JWT
require('dotenv').config();
const jwt = require('jsonwebtoken');


//login function
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Kiểm tra xem tài khoản tồn tại
        const hashedPass = hash.MD5(password);
        const user = await db.Account.findOne({
            where: { email, password: hashedPass }
        });

        if (!user) {
            return res.status(401).json({ error: 'Email, passowrd invalid!' });
        }
        if (user.status == 0) {
            return res.status(401).json({ error: 'account has been disabled' });
        }
        const loginToken = jwt.sign({ userId: user.id, role: user.role, status: user.status, userMail: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' });

        res.status(200).json({
            message: 'Login successful',
            user: user,
            loginToken,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}


//Logout function
const logout = async (req, res) => {
    const authorizationHeader = req.rawHeaders[1];
    if (!authorizationHeader) {
        return res.sendStatus(401);
    }
    const token = authorizationHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    console.log("check token", token)
    const addTokenToBackList = await db.blackListToken.create({
        token
    });
    res.status(201).json(addTokenToBackList);
}


module.exports = {
    login, logout
}
