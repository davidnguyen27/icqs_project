const validation = require('../middleware/validation')
const db = require('../models');
const hash = require('object-hash');
var md5 = require('md5');
// JWT
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createJWT, verifyToken } = require('../middleware/JWT')

// Staff is created by Admin
const createStaff = async (req, res) => {
    try {
        const { username, password, email, phone } = req.body;

        if (validation.isValidPassword(password) == false) {
            return res.status(401).json({ error: 'Password must have a minimum length of 8 characters including upper and lower case letters and numbers!' });
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

        const hashedPass = hash.MD5(password)
        const newAccount = await db.Account.create({ username, password: hashedPass, email, phone, role: "STAFF" });
        res.status(201).json(newAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getStaffInfoByAdmin = async (req, res) => {
    try {
        const account = await db.Account.findAll({
            where: { role: "STAFF" },
        });
        if (account == '') {
            return res.status(401).json({ error: 'Dont have any account, please create new account!' });
        }
        return res.status(200).json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getUserInfoByAdmin = async (req, res) => {
    try {
        const account = await db.Account.findAll({
            where: { role: "USER" },
        });
    if (account == '') {
        return res.status(401).json({ error: 'Dont have any account, please create new account!' });
    }
    return res.status(200).json(account);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}

const getInFor = async (req, res) => {
    try {
        const {userId} = req.user;
        const account = await db.Account.findOne({
            attributes: ['username', 'email', 'phone'],
            where: { id: userId},
        });
        return res.status(200).json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//Register
const register = async (req, res) => {
    try {
        const { username, password, email, phone } = req.body;
        // Check password có hợp lệ hay không
        if (validation.isValidPassword(password) == false) {
            return res.status(401).json({ error: 'Password must have a minimum length of 8 characters including upper and lower case letters and numbers!' });
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
// update profile by staff / user
let updateProfile = async (req, res) => {
    try {
        const { username, phone } = req.body;
        const {userId} = req.user; // Assuming the blog id is passed in the request parameters
        // Find the blog by id
        const account = await db.Account.findOne({
            where: { id: userId },
        });

        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }

        // check phone có hợp lệ hay không
        if (validation.isPhoneNumber(phone) == false) {
            return res.status(401).json({ error: 'Phone numbers cannot contain letters, special characters or spaces' });
        }

        await account.update({ username, phone });
        await account.save;

        // Return the updated blog detail
        return res.status(200).json({ account });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const hiddenAccount = async (req, res) => {
    try {
        const accountID = req.params.id;
        console.log("check id:", accountID)
        const account = await db.Account.findOne({
            where: { id: accountID, status: 1 },
        });
        console.log("check account:", account)
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }

        await account.update({ status: 0 });
        await account.save;

        // Return the updated blog detail
        res.status(200).json({ account });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const restoreAccount = async (req, res) => {
    try {
        const accountID = req.params.id;
        console.log("check id:", accountID)
        const account = await db.Account.findOne({
            where: { id: accountID, status: 0 },
        });
        console.log("check account:", account)
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }

        await account.update({ status: 1 });
        await account.save;

        // Return the updated blog detail
        res.status(200).json({ account });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createStaff, register, getStaffInfoByAdmin, getUserInfoByAdmin, updateProfile, hiddenAccount, restoreAccount, getInFor
}
