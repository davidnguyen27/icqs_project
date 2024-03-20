const nodemailer = require('nodemailer');
require('dotenv').config();
const validation = require('../middleware/validation')
const db = require('../models');
const hash = require('object-hash');
const sendEmailService = async (userMail) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const randomNewPassWord = generateRandomString(8)

    const account = await db.Account.findOne({
        where: { email: userMail}
    });
    console.log('account:', account);
    if (!account) {
        return res.status(401).json({ error: 'Không có tài khoản nào được tồn tại với địa chỉ email này' });
    }
    const hashedPass = hash.MD5(randomNewPassWord);
    await account.update({ password:hashedPass });
    await account.save;
    const info = await transporter.sendMail({
        from: '"Cửa hàng nội thất" <tanhpce171112@fpt.edu.vn>',
        to: userMail,
        subject: "Cửa hàng nội thất - Mật khẩu mới ✔",
        text: `Your verification codes is: ${randomNewPassWord}`,
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Xác Thực</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .logo {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .logo img {
                    max-width: 100px;
                }
                .verification-code {
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .instructions {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .footer {
                    text-align: center;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="logo">
                    <img src="https://i.pinimg.com/474x/40/7e/49/407e49c836053bb629df729e7f6f80b1.jpg"  alt="Logo">
                </div>
                <div class="verification-code">
                    Mật khẩu mới của bạn là: <span style="color: #007bff;">${randomNewPassWord}</span>
                </div>
                <div class="instructions">
                 Vui lòng đăng nhập vào bằng mật khẩu mới.
                </div>
                <div class="footer">
                    Email này được gửi bởi Cửa hàng nội thất. Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi theo địa chỉ tanhpce171112@fpt.edu.vn hoặc <span style="color: #007bff;">hotline: 0900000001</span>
                </div>
            </div>
        </body>
        </html>
        `,
    });

    return info;
};


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


module.exports = {
    sendEmailService
}