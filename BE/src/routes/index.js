import { badRequestException } from "../middlewares/errorHandler";
import authRouter from "./authRoute";
import userRouter from "./userRoute";
import propertyRouter from "./propertyRoute";
import feedbackRouter from "./feedbackRoute";
import paymentRouter from "./paymentRoute";
import blogRouter from "./blogRoute";
import contractRouter from "./contractRoute";
import quoteRouter from "./quoteRoute";
import emailRouter from "./emailRoute";
import designRouter from "./designRoute";
const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/property", propertyRouter);
  app.use("/api/v1/feedback", feedbackRouter);
  app.use("/api/v1/payment", paymentRouter);
  app.use("/api/v1/blog", blogRouter);
  app.use("/api/v1/contract", contractRouter);
  app.use("/api/v1/quote", quoteRouter);
  app.use("/api/v1/email", emailRouter);
  app.use("/api/v1/design", designRouter);
  app.use(badRequestException);
};

export default initRoutes;
