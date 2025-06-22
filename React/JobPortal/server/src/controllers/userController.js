import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/auth.js";

export const userRegister = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, address, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !address || !password) {
      const error = new Error("All fields Required");
      err.StatusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      err.StatusCode = 409;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      address,
      password: hashedPassword,
    });
    console.log(newUser);
    res.status(200).json({ message: "User Registered Succesfully" });
  } catch (error) {
    next(error);
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields Required");
      err.StatusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      err.StatusCode = 404;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, user.password);
    if (!isVerified) {
      const error = new Error("Invalid Credentials");
      err.StatusCode = 401;
      return next(error);
    }

    genAuthToken(user._id, res);

    res.status(200).json({ message: "User Logged In Succesfully" });
  } catch (error) {
    next(error);
  }
};

export const userLogout = (req, res) => {
  res.json({ message: "User Logged Out Succesfully" });
};
