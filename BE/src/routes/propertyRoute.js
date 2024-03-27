import express from "express";
import propertyController from "../controller/propertyController";
import validateDto from "../middlewares/validation";
import Joi from "joi";
import { numberReq, stringReq, string, array } from "../middlewares/joiSchema";
import { isAdmin, isStaff, verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.post(
  "/",
  verifyToken,
  isAdmin,
  validateDto(
    Joi.object({
      name: stringReq,
      price: numberReq,
      style: stringReq,
      images: array,
      description: stringReq,
      material: array,
      combo: array,
    })
  ),
  propertyController.addProperty
);
router.put("/:id", verifyToken, isAdmin, propertyController.updateProperty);
router.delete("/:id", propertyController.deleteProperty);
router.get("/:id", verifyToken, isAdmin, propertyController.getPropertyById);
router.get("/", propertyController.getPropertyTypes);
export default router;
