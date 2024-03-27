import express from "express";
import validateDto from "../middlewares/validation";
import Joi from "joi";
import { numberReq, stringReq, string } from "../middlewares/joiSchema";
import authController from "../controller/authController";
const router = express.Router();

router.post(
  "/register",
  validateDto(
    Joi.object({
      email: stringReq,
      password: stringReq,
      name: string,
      phone: numberReq,
      role: string,
    })
  ),
  authController.register
);

router.post(
  "/login",
  validateDto(
    Joi.object({
      password: stringReq,
      email: stringReq,
    })
  ),
  authController.login
);

export default router;
