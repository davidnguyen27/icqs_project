import express from "express";
import { isAdmin, isStaff, verifyToken } from "../middlewares/verifyToken";
import contractController from "../controller/contractController";
const router = express.Router();

router.post("/", verifyToken, contractController.createContract);
router.post("/updateContractStatus", contractController.updateContractStatus);
router.get("/", verifyToken, contractController.getContractByUserId);
router.get("/all", verifyToken, isStaff, contractController.getAllContract);
router.put("/:id", verifyToken, contractController.editContract);

export default router;
