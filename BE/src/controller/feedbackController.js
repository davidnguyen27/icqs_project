const asyncHandler = require("express-async-handler");
const db = require("../models");
const { Op, Sequelize } = require("sequelize");

const addFeedback = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { propertyId } = req.params;

  const { comment, rating } = req.body;
  const property = await db.Property.findByPk(propertyId);
  if (!property) {
    return res
      .status(404)
      .json({ success: false, message: "Property not found" });
  }
  const newFeedback = await db.Feedback.create({
    property_id: propertyId,
    customer_id: userId,
    comment: comment,
    rating: rating,
  });

  return res.json({ success: true, newFeedback });
});

const getFeedBackByProperty = asyncHandler(async (req, res) => {
  const { propertyId } = req.params;
  const allFeedback = await db.Feedback.findAll();
  const filterFeedback = allFeedback.filter(
    (feedback) => feedback.property_id === propertyId
  );

  return res.json({
    success: true,
    message: "Get By Property",
    filterFeedback,
  });
});

const updateFeedback = asyncHandler(async (req, res) => {
  const { comment, rating } = req.body;
  const { feedbackId } = req.params;
  const existingFeedback = await db.Feedback.findByPk(feedbackId);

  if (!existingFeedback)
    return res
      .status(404)
      .json({ success: false, message: "Feedback not found" });
  const updateFeedback = await existingFeedback.update({
    comment: comment,
    rating: rating,
  });
  return res.json({ success: true, message: "Update success", updateFeedback });
});

const deleteFeedback = asyncHandler(async (req, res) => {
  const { feedbackId } = req.params;
  const existingFeedback = await db.Feedback.findByPk(feedbackId);

  if (!existingFeedback)
    return res
      .status(404)
      .json({ success: false, message: "Feedback not found" });
  await existingFeedback.destroy();
  return res.json({ success: true, message: "Delete feedback success" });
});

const getFeedbackType = asyncHandler(async (req, res) => {
  const { limit, page, sort, ...query } = req.query;
  const { propertyId } = req.params;

  const options = {};
  if (sort) {
    const order = sort
      .split(",")
      .map((el) =>
        el.startsWith("-") ? [el.replace("-", ""), "DESC"] : [el, "ASC"]
      );
    options.order = order;
  }

  if (!limit) {
    const response = await db.Feedback.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      message: response ? "Got" : "Cannot get Blogs",
      feedback: response,
    });
  }
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const offset = (prevPage - 1) * limit;
  if (offset) {
    options.offset = offset;
  }
  options.limit = +limit;

  const response = await db.Feedback.findAndCountAll({
    where: query,
    ...options,
  });

  return res.json({
    success: response.length > 0,
    message: response ? "Got" : "Cannot get properties",
    feedback: response,
  });
});

module.exports = {
  addFeedback,
  deleteFeedback,
  updateFeedback,
  getFeedBackByProperty,
  getFeedbackType,
};
