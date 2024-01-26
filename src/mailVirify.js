// const nodemailer = require('nodemailer');

// // Tạo một transporter sử dụng SMTP
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: true,
//   auth: {
//     user: 'tanhpce171112@fpt.edu.vn',
//     pass: 'tan10810114248'
//   }
// });

// // Hàm gửi email xác thực
// async function sendVerificationEmail() {
//   // Tạo nội dung email
//   const mailOptions = {
//     from: 'tanhpce171112@fpt.edu.vn',
//     to: 'daimons182@gmail.com',
//     subject: 'Xác thực tài khoản',
//     text: `Mã xác thực của bạn là: ${1081}`
//   };

//   try {
//     // Gửi email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);
//   } catch (error) {
//     console.error('Error sending email: ', error);
//   }
// }

// // Sử dụng hàm sendVerificationEmail
// module.exports = {
//     sendVerificationEmail,
// }
