import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import connectWithDb from "./config/db.js";
import JobRoutes from "./routes/JobRoutes.js";
import AuthRoutes from "./routes/authRouter.js";
import UserRoutes from "./routes/userRouter.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { authenticateUser } from "./middlewares/authMiddleware.js";
import cookieParser from "cookie-parser";
//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//Configuration
dotenv.config();
connectWithDb();

//Cloudinary Configuration
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();

//MiddleWares
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./public")));

//routes
app.use("/api/v1/jobs", authenticateUser, JobRoutes);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/users", authenticateUser, UserRoutes);

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,"./public","index.html"))
})

app.get("/api/v1", (req, res) => {
  res.send("Hello World");
});

//Error MiddleWare
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT || 5100, () => {
  console.log("server is running");
});
