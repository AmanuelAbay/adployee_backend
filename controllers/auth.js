import User from "../models/Admin.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // hashing user password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const Admin = new User({
      ...req.body,
      password: hash,
    });

    await Admin.save();
    res.status(200).send("Admin has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // console.log(user);
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong password or username!"));
    }

    const token = jwt.sign(
      { id: user._id, full_name: user.full_name },
      process.env.JWT_SECRET_KEY
    );
    const { password, ...currentUser } = user._doc;
    console.log(user._id);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ currentUser });
  } catch (err) {
    next(err);
  }
};
