import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  // console.log(token);
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  next();
};

