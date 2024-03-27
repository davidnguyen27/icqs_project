const validateDto = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  console.log(error);
  if (error)
    res.status(403).json({ success: false, message: error.details[0].message });

  next();
};

export default validateDto;
