import express from "express";
require("dotenv").config();
import cors from "cors";
const app = express();
import initRoutes from "./src/routes/index";
import connectDatabase from "./src/config/connectDatabase";
import cookieParser from "cookie-parser";
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);
connectDatabase();

const port = process.env.PORT || 8080;
const listener = app.listen(port, () => {
  console.log(`Server is running on port ${listener.address().port}`);
});
