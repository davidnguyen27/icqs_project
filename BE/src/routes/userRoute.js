import express from "express";
import userController from "../controller/userController";
import { isAdmin, isStaff, verifyToken } from "../middlewares/verifyToken";
const router = express.Router();

router.get("/current", verifyToken, userController.getCurrent);
router.get("/require", verifyToken, isAdmin, userController.getAllUser);
router.put("/:id", verifyToken, userController.editUser);
export default router;
