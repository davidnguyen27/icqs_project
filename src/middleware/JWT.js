const jwt = require('jsonwebtoken');
// { expiresIn: '30s' }
const createJWT = (payload) => {

  let token = null;
  try {
    token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '604800s' });
    console.log(token);
  } catch (err) {
    console.log(err);
  }
  return token;
};

const authenToken = (req, res, next) => {
  const authorizationHeader = req.rawHeaders[3];

  if (!authorizationHeader) {
    return res.sendStatus(401);
  }
  const token = authorizationHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
   
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    // If token is valid, you might want to attach the user information to the request object
    req.user = data;
    next();
  });
}
// const verifyToken = (req, res, next) => {
//   const token = req.headers?.authorization;
//   if (!token){
//      console.log(token);
//     return res.status(403).json({ success: false, message: "Creds not provide" });
//   }

//   const rawToken = token?.split(" ")[1];
//   jwt.verify(rawToken, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
//     if (error)
//       return res.status(401).json({ success: false, message: "Creds invalid" });
//     req.user = decode;
//     next();
//   });
// };

const isAdmin = (req, res, next) => {
  const { role } = req.user;
  console.log("aa")
  if (role !== "ADMIN") {
    return res
      .status(401)
      .json({ success: false, message: "You are not ADMIN" });
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
  createJWT, isAdmin, isStaff, authenToken
};
