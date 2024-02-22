const validation = require('../middleware/validation')
const db = require('../models');
const hash = require('object-hash');
var md5 = require('md5');
// JWT
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createJWT, verifyToken } = require('../middleware/JWT')


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
        if(user.status == 0){
            return res.status(401).json({ error: 'account has been disabled' });
        }
        const loginToken = jwt.sign({ userId: user.id, role: user.role, status: user.status }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' });

        // Lưu token vào cookie
        res.cookie('loginToken', loginToken, { 
            httpOnly: true, // Không cho truy cập cookie từ phía client (JavaScript)
            maxAge: 7 * 24 * 60 * 60 * 1000 // Thời gian sống của cookie, ở đây là 7 ngày
        });

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
const logout = (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
  }


module.exports = {
 login, logout
}
