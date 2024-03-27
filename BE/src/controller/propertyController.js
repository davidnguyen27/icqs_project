const db = require("../models");
const asyncHandler = require("express-async-handler");
const { Op, Sequelize } = require("sequelize");

const addProperty = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { name, price, style, description, images, material, combo } = req.body;
  const newProperty = await db.Property.create({
    userId: userId,
    name,
    price,
    style,
    description,
    images,
    material,
    combo,

  });
  return res.json({
    success: true,
    message: "add success",
    newProperty,
  });
});

const updateProperty = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
  const { name, price, style, description, image, material, combo, status } = req.body;
  const existingProperty = await db.Property.findByPk(id);
  if (!existingProperty) {
    return res
      .json(404)
      .json({ success: false, message: "Property not found" });
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
    status
  });
  return res.json({ success: true, message: "Update success", updateProperty });
});

const deleteProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const response = await db.Property.destroy({
    where: { id },
  });

  return res.json({
    sucess: response > 0,
    message: response > 0 ? "Delete property success" : "No data deleted",
  });
});

const getAllProperties = asyncHandler(async (req, res) => {
  const options = {
    order: [["name", "ASC"]],
  };
  const allProperties = await db.Property.findAll(options);
  return res.json({
    success: true,
    properties: allProperties,
  });
});

const getPropertyById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const property = await db.Property.findByPk(id);
  if (!property) {
    return res
      .status(404)
      .json({ sucess: false, message: "Property not found" });
  }

  return res.json({ sucess: true, property });
});

const getPropertyTypes = asyncHandler(async (req, res) => {
  const { limit, page, fields, name, sort, ...query } = req.query;
  const options = {};
  //limit fields
  if (fields) {
    const attributes = fields.split(",");
    const isExclude = attributes.some((el) => el.startsWith("-"));
    if (isExclude) {
      options.attributes = {
        exclude: attributes.map((el) => el.replace("-", "")),
      };
    } else {
      options.attributes = attributes;
    }
  }
  //filter by client queries
  if (name)
    query.name = Sequelize.where(
      Sequelize.fn("LOWER", Sequelize.col("name")),
      "LIKE",
      `%${name.toLocaleLowerCase()}%`
    );
  //sorting
  // [[createdAt, ASC], [name, DESC]]
  // => [createAt, -name]
  if (sort) {
    const order = sort
      .split(",")
      .map((el) =>
        el.startsWith("-") ? [el.replace("-", ""), "DESC"] : [el, "ASC"]
      );
    options.order = order;
  }
  if (!limit) {
    const response = await db.Property.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      message: response ? "Got" : "Cannot get properties",
      property: response,
    });
  }
  // Pagination
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const offset = (prevPage - 1) * limit;
  if (offset) {
    options.offset = offset;
  }
  options.limit = +limit;
  const response = await db.Property.findAndCountAll({
    where: query,
    ...options,
  });

  return res.json({
    success: response.length > 0,
    message: response ? "Got" : "Cannot get properties",
    property: response,
  });
});
module.exports = {
  addProperty,
  updateProperty,
  deleteProperty,
  getAllProperties,
  getPropertyById,
  getPropertyTypes,
};
