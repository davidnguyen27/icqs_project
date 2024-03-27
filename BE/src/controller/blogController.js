const asyncHandler = require("express-async-handler");
const db = require("../models");

const createBlog = asyncHandler(async (req, res) => {
  const { content, title, images } = req.body;
  const { userId } = req.user;
  const newBlog = await db.Blog.create({ userId, title, content, images });
  return res.json({
    success: true,
    message: "Create Blog Successfully",
    newBlog,
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

const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const allBlogs = await db.Blog.findAll();
  const filterBlog = allBlogs.filter((item) => item.id === id);
  return res.json({ success: true, blog: filterBlog });
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

module.exports = { createBlog, updateBlog, getBlogById, getBlogTypes };
