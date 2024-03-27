import express from "express";
import validateDto from "../middlewares/validation";
import Joi from "joi";
import { numberReq, stringReq, array } from "../middlewares/joiSchema";
import { isStaff, verifyToken } from "../middlewares/verifyToken";
import quoteController from "../controller/quoteController";
const router = express.Router();

router.post(
  "/",
  verifyToken,
  isStaff,
  validateDto(
    Joi.object({
      type: stringReq,
      scale: stringReq,
      product: stringReq,
      description: stringReq,
      unit: stringReq,
      price: numberReq,
      wage: numberReq,
      image: array,
    })
  ),
  quoteController.addQuote
);
router.get("/", quoteController.getQuotes);

export default router;
