const asyncHandler = require("express-async-handler");
const db = require("../models");

const createDesign = asyncHandler(async (req, res) => {
  const { style, designImages, description } = req.body;
  const newDesign = await db.Design.create({
    style,
    designImages,
    description,
  });
  return res.json({
    success: true,
    message: "Create Blog Successfully",
    design: newDesign,
  });
});

const updateBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const { content, title } = req.body;
  const { userId } = req.user;
  const existingBlog = await db.Blog.findByPk(blogId);
  if (!existingBlog)
    return res.status(401).json({ success: false, message: "Blog not found" });
  const updateBlog = await existingBlog.update({ userId, title, content });
  return res.json({
    success: true,
    message: "Blog update successfully",
    updateBlog,
  });
});

const getBlogTypes = asyncHandler(async (req, res) => {
  const { limit, page, ...query } = req.query;
  const options = {};

  if (!limit) {
    const response = await db.Blog.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      message: response ? "Got" : "Cannot get Blogs",
      blogs: response,
    });
  }
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const offset = (prevPage - 1) * limit;
  if (offset) {
    options.offset = offset;
  }
  options.limit = +limit;
  const response = await db.Blog.findAndCountAll({
    where: query,
    ...options,
  });

  return res.json({
    success: response.length > 0,
    message: response ? "Got" : "Cannot get Blogs",
    blogs: response,
  });
});

module.exports = { createDesign };
