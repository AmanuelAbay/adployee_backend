import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.js";
import employeeRoute from "./routes/employee.js";
import adminRoute from "./routes/admin.js";
import mongoose from "mongoose";

const adployee = express();
dotenv.config();

const url = process.env.mongodb_url || "mongodb://0.0.0.0:27017/employee?";
const connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL || process.env.LOCAL_MONGODB_URL,
      {
        useNewUrlParser: true,
      }
    );
    console.log("mongoDB connected.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

adployee.use(cookieParser());
adployee.use(cors());
adployee.use(express.json());
adployee.use("/api/auth", authRoute);
adployee.use("/api/admin", adminRoute);
adployee.use("/api/employee", employeeRoute);

adployee.use((err, res) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

adployee.listen(process.env.PORT, () => {
  connect();
  console.log(`server running on PORT ${process.env.PORT} ...`);
});
