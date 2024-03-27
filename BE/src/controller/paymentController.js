const db = require("../models");
const asyncHandler = require("express-async-handler");
const { Sequelize } = require("sequelize");
const addPay = asyncHandler(async (req, res) => {
  const { money, title, paymentImages } = req.body;
  const { userId } = req.params;
  const newPay = await db.Payment.create({
    user_id: userId,
    money,
    title,
    paymentImages,
  });

  return res.json({ success: true, newPay });
});

const updatePay = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { paymentId } = req.params;
  const { money, title, image, status } = req.body;
  const existingPay = await db.Payment.findByPk(paymentId);
  if (!existingPay)
    return res.status(403).json({ success: false, message: "Pay not existed" });
  if (status !== "PENDING" && status !== "CANCEL" && status !== "FINISHED") {
    return res.status(401).json({ success: false, message: "status invalid" });
  }
  const updatePay = await existingPay.update({
    userId: userId,
    money,
    title,
    image,
    status,
  });
  return res.json({ success: true, message: "update success", updatePay });
});

const deletePay = asyncHandler(async (req, res) => {
  const { paymentId } = req.params;
  const existingPay = await db.Payment.findByPk(paymentId);
  if (!existingPay)
    return res.status(403).json({ success: false, message: "Pay not existed" });
  await existingPay.destroy();
  return res.json({ success: true, message: "Delete pay success" });
});

const getByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const allPay = await db.Payment.findAll();
  const userPay = allPay.filter((pay) => pay.user_id === userId);

  return res.json({ success: true, userPay });
});

const getAllPay = asyncHandler(async (req, res) => {
  const { limit, page, title, ...query } = req.query;
  const options = {};

  if (title)
    query.title = Sequelize.where(
      Sequelize.fn("LOWER", Sequelize.col("title")),
      "LIKE",
      `%${title.toLocaleLowerCase()}%`
    );

  if (!limit) {
    const response = await db.Payment.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      message: response ? "Got" : "Cannot get payments",
      payment: response,
    });
  }

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const offset = (prevPage - 1) * limit;
  if (offset) {
    options.offset = offset;
  }
  options.limit = +limit;
  const response = await db.Payment.findAndCountAll({
    where: query,
    ...options,
  });

  return res.json({
    success: response.length > 0,
    message: response ? "Got" : "Cannot get payments",
    payment: response,
  });
});

module.exports = { addPay, updatePay, deletePay, getByUserId, getAllPay };
