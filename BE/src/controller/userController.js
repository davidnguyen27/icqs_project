const asyncHandler = require("express-async-handler");
const db = require("../models");
const { throwError } = require("../middlewares/errorHandler");

const { Sequelize } = require("sequelize");
const getCurrent = asyncHandler(async (req, res) => {
  const { userId, role } = req.user;
  const response = await db.User.findByPk(userId);
  return res.json({
    success: Boolean(response),
    message: response ? "Got." : "Cannot get user",
    currentUser: response,
  });
});
const getAllUser = asyncHandler(async (req, res) => {
  const { limit, page, email, ...query } = req.query;
  const options = {};
  if (email)
    query.email = Sequelize.where(
      Sequelize.fn("LOWER", Sequelize.col("email")),
      "LIKE",
      `%${email.toLocaleLowerCase()}%`
    );
  if (!limit) {
    const response = await db.User.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      message: response ? "Got" : "Cannot get user",
      user: response,
    });
  }
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const offset = (prevPage - 1) * limit;
  if (offset) {
    options.offset = offset;
  }
  options.limit = +limit;
  const response = await db.User.findAndCountAll({
    where: query,
    ...options,
  });
  return res.json({
    success: response.length > 0,
    message: response ? "Got" : "Cannot get properties",
    user: response,
  });
});

const editUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, phone, role, avatar, status } = req.body;
  const existUser = await db.User.findByPk(id);
  if (!existUser) {
    return res
      .json(404)
      .json({ success: false, message: "Property not found" });
  }
  const updateUser = await existUser.update({ name, phone, role, avatar, status });
  return res.json({
    success: true,
    message: "Update success",
    updateUser,
  });
});
module.exports = {
  getCurrent,
  getAllUser,
  editUser,
};
