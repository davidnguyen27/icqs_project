import express from "express";
import { isStaff, verifyToken } from "../middlewares/verifyToken";
import designController from "../controller/designController";
import validateDto from "../middlewares/validation";
import Joi from "joi";
import { array, stringReq } from "../middlewares/joiSchema";

const router = express.Router();

router.post(
  "/",
  verifyToken,
  isStaff,
  validateDto(
    Joi.object({ style: stringReq, designImages: array, description: array })
  ),
  designController.createDesign
);

export default router;
