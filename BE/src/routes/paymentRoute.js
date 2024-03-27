import express from "express";
import paymentController from "../controller/paymentController";
import { isAdmin, isStaff, verifyToken } from "../middlewares/verifyToken";
import validateDto from "../middlewares/validation";
import Joi from "joi";
import { numberReq, stringReq, string, array } from "../middlewares/joiSchema";

const router = express.Router();

router.post(
  "/:userId",
  verifyToken,
  isAdmin,
  validateDto(
    Joi.object({
      money: numberReq,
      title: stringReq,
      paymentImages: array,
      status: string,
    })
  ),
  paymentController.addPay
);

router.put("/:paymentId", verifyToken, isStaff, paymentController.updatePay);
router.delete("/:paymentId", verifyToken, isStaff, paymentController.deletePay);
router.get("/", verifyToken, paymentController.getByUserId);
router.get("/allpayment", verifyToken, isAdmin, paymentController.getAllPay);

export default router;
