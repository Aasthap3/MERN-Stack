import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const userProtect = async (req, res, next) => {
  const token = req.cookies.secret;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  req.user = currentUser;

  next();
};
