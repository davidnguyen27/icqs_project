const nodemailer = require("nodemailer");
require("dotenv").config();
const db = require("../models");

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

  const randomOtp = generateRandomString(8);

  const account = await db.User.findOne({
    where: { email: userMail },
  });

  if (!account) {
    return res.status(401).json({
      error: "Không có tài khoản nào được tồn tại với địa chỉ email này",
    });
  }
  await db.Otp.create({ otpCode: randomOtp });
  setTimeout(async () => {
    await db.Otp.destroy({ where: { otpCode: randomOtp } });
  }, 60000);

  const info = await transporter.sendMail({
    from: '"My House" <myhouse@gmail.com>',
    to: userMail,
    subject: "My House - OTP ✔",
    text: `Your verification codes is: ${randomOtp}`,
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
                OTP của bạn là: <span style="color: #007bff;">${randomOtp}</span>
                </div>
                <div class="instructions">
                 Vui lòng nhập OTP để xác thực. Mã chỉ tồn tại 1 phút
                </div>
                <div class="footer">
                    Email này được gửi bởi Cửa hàng nội thất. Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi theo địa chỉ Myhouse@gmail.com hoặc <span style="color: #007bff;">hotline: 0900000001</span>
                </div>
            </div>
        </body>
        </html>
        `,
  });

  return info;
};

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = {
  sendEmailService,
};
