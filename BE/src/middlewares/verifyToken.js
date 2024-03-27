const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.headers?.authorization;
  if (!token)
    return res
      .status(403)
      .json({ success: false, message: "Creds not provide" });
  const rawToken = token?.split(" ")[1];
  jwt.verify(rawToken, process.env.JWT_SECRET, (error, decode) => {
    if (error)
      return res.status(401).json({ success: false, message: "Creds invalid" });
    req.user = decode;
    next();
  });
};

const isAdmin = (req, res, next) => {
  const { role } = req.user;

  if (role !== "ADMIN") {
    return res
      .status(401)
      .json({ success: false, message: "You do not have access" });
  }
  next();
};

const isStaff = (req, res, next) => {
  const { role } = req.user;
  if (role === "USER") {
    return res
      .status(401)
      .json({ success: false, message: "You do not have access" });
  }
  next();
};

module.exports = {
  verifyToken,
  isAdmin,
  isStaff,
};
