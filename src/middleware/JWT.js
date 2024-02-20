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
  const authorizationHeader = req.rawHeaders[1];
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
    req.token = token;
    next();
  });
}

const authenToken2 = (req, res, next) => {
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
    req.token = token;
    next();
  });
}


const isAdmin = (req, res, next) => {
  const { role } = req.user;
  
  const Role = role.toString();
  console.log("check ad", Role)
  if (Role !== "ADMIN") {
    return res
      .status(401)
      .json({ success: false, message: "You are not ADMIN" });
  }
  next();
};

const isStaff = (req, res, next) => {
  const { role } = req.user;
  if (role !== "STAFF") {
    return res
      .status(401)
      .json({ success: false, message: "You are not STAFF" });
  }
  next();
};

const isUser = (req, res, next) => {
  const { role } = req.user;
  if (role !== "USER") {
    return res
      .status(401)
      .json({ success: false, message: "You are not USER" });
  }
  next();
};

const isExist = (req, res, next) => {
  const { role } = req.user;
  if (role !== "USER"&&role !== "ADMIN"&&role !== "STAFF") {
    return res
      .status(401)
      .json({ success: false, message: "You are not USER" });
  }
  next();
};



module.exports = {
  createJWT, isAdmin, isStaff, authenToken, isUser, isExist, authenToken2
};
