import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = async (req, res, next) => {
  const token = await req.headers["authorization"].split(" ")[1];
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
    if (err) {
      return next(createError(401, "Invalid Token!"));
    }
    next();
  });
};
