const asyncHandler = require("express-async-handler");
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = asyncHandler(async (req, res) => {
  const { password, phone, name, email, role } = req.body;
  const response = await db.User.findOrCreate({
    where: { email: email, phone: phone },
    defaults: req.body,
  });
  console.log("response", response);
  if (!response[1]) {
    if (response[0].email === email) {
      return res.status(401).json({
        success: false,
        message: "Email đã tồn tại",
      });
    } else if (response[0].phone === phone) {
      return res.status(401).json({
        success: false,
        message: "Số điện thoại đã tồn tại",
      });
    }
  }
  return res.json({
    success: true,
    message: "Your name account is created",
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await db.User.findOne({
    where: { email },
  });
  if (!user)
    return res
      .status(401)
      .json({ success: false, message: "Mật khẩu hoặc email không đúng" });
  const isMatchingPassword = bcrypt.compareSync(password, user.password);
  if (!isMatchingPassword)
    return res
      .status(401)
      .json({ success: false, message: "Mật khẩu hoặc email không đúng" });
  const isBanned = await db.User.findOne({
    where: { email, status: 0 },
  });
  if (isBanned)
    return res
      .status(401)
      .json({ success: false, message: "Tài khoản của bạn đã bị chặn bởi quản trị viên" });
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  return res.json({
    success: true,
    message: "Login successfully",
    accessToken: token,
    user: user,
  });
});

module.exports = {
  register,
  login,
};
