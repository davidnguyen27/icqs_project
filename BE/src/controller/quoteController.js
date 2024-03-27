const db = require("../models");
const asyncHandler = require("express-async-handler");
const { Op, Sequelize } = require("sequelize");

const addQuote = asyncHandler(async (req, res) => {
  const { type, scale, product, description, unit, price, wage, image } =
    req.body;
  const newQuote = await db.Quote.create({
    type,
    scale,
    product,
    description,
    unit,
    price,
    wage,
    image,
  });
  return res.json({
    success: true,
    message: "add success",
    newQuote,
  });
});

const updateProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { acreage } = req.body;
  const existingProperty = await db.Property.findByPk(id);
  if (!existingProperty) {
    return res.json(404).json({ success: false, message: "update not found" });
  }
  const updateProperty = await existingProperty.update({
    userId: userId,
    name,
    price,
    style,
    description,
    image,
    material,
    combo,
  });
  return res.json({ success: true, message: "Update success", updateProperty });
});

const getQuotes = asyncHandler(async (req, res) => {
  const allQuotes = await db.Quote.findAll();

  return res.json({
    success: true,
    message: "Get By Property",
    allQuotes,
  });
});

module.exports = {
  addQuote,
  getQuotes,
};

const updateProperties = asyncHandler(async (req, res) => {
  const { ids } = req.body;
  const { acreage, name, price, style, description, image, material, combo } =
    req.body;

  try {
    const updatedProperties = [];
    for (const id of ids) {
      const existingProperty = await db.Property.findByPk(id);
      if (!existingProperty) {
        return res.status(404).json({
          success: false,
          message: `Property with id ${id} not found`,
        });
      }

      await existingProperty.update({
        userId: userId,
        acreage,
        name,
        price,
        style,
        description,
        image,
        material,
        combo,
      });
      updatedProperties.push(existingProperty);
    }
    return res.json({
      success: true,
      message: "Properties updated successfully",
      updatedProperties,
    });
  } catch (error) {
    console.error("Error updating properties:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating properties",
    });
  }
});
