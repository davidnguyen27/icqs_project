// xu ly loi
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  return res
    .status(statusCode)
    .json({ success: false, message: error.message });
};

const throwError = (code, message, res, next) => {
  const error = message;
  res.status(code);
  next(error);
};
const badRequestException = (req, res, next) => {
  const error = `Route ${req.originalUrl} not found`;
  res.status(404);
  next(error);
};
module.exports = { errorHandler, throwError, badRequestException };
