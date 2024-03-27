import express from "express";
import feedbackController from "../controller/feedbackController";
import { verifyToken } from "../middlewares/verifyToken";

const router = express.Router();

router.post("/:propertyId", verifyToken, feedbackController.addFeedback);
router.get("/", feedbackController.getFeedbackType);
router.put("/:feedbackId", verifyToken, feedbackController.updateFeedback);
router.delete("/:feedbackId", verifyToken, feedbackController.deleteFeedback);
export default router;
