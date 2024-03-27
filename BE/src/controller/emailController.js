const emailService = require("../services/emailService");
const validationEmail = require("../middlewares/validationEmail");
const db = require("../models");
const sendEmail = async (req, res) => {
  try {
    const { userMail } = req.body;
    if (validationEmail.isEmailValid(userMail) == true) {
      const respone = await emailService.sendEmailService(userMail);
      return res.status(200).json({ success: true, message: "Gửi thành công" });
    }
    return res.status(401).json({
      success: false,
      message: "Email không hợp lệ!",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "err",
    });
  }
};

const checkOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const response = await db.Otp.findOne({ where: { otpCode: otp } });
    if (!response) {
      return res
        .status(401)
        .json({ success: false, message: "Mã OTP không hợp lệ" });
    }
    return res.json({ success: true, message: "Mã OTP xác minh thành công" });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "err",
    });
  }
};

module.exports = {
  sendEmail,
  checkOtp,
};
