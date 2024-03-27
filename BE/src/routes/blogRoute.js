import express from "express";
import { isStaff, verifyToken } from "../middlewares/verifyToken";
import blogController from "../controller/blogController";
import validateDto from "../middlewares/validation";
import Joi from "joi";
import { array, string, stringReq } from "../middlewares/joiSchema";

const router = express.Router();

router.post(
  "/",
  verifyToken,
  isStaff,
  validateDto(Joi.object({ title: stringReq, images: array, content: array })),
  blogController.createBlog
);

router.put("/:blogId", verifyToken, isStaff, blogController.updateBlog);
router.get("/:id", blogController.getBlogById);
router.get("/", blogController.getBlogTypes);

export default router;
