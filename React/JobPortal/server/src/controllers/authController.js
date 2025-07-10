import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/auth.js";
import getCloudinary from "../config/cloudinary.js";

export const Register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, role, address, password } =
      req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !role ||
      !address ||
      !password
    ) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 409;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const photoLink = `https://placehold.co/600x400?text=${firstName.charAt(
      0
    )}${lastName.charAt(0)}`;

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      role,
      address,
      password: hashedPassword,
      photo: photoLink,
    });
    console.log(newUser);
    res.status(200).json({ message: "User Registered Succesfully" });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, user.password);
    if (!isVerified) {
      const error = new Error("Invalid Credentials");
      error.statusCode = 401;
      return next(error);
    }

    genAuthToken(user._id, res);

    res.status(200).json({
      message: "User Logged In Succesfully",
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        photo: user.photo,
        address: user.address,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const Logout = (req, res, next) => {
  try {
    res.cookie("secret", "", {
      expires: new Date(Date.now()),
    });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    next(error);
  }
};

export const Update = async (req, res, next) => {
  try {
    const { firstName, lastName, phone } = req.body;

    if (!firstName || !lastName || !phone) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    let photo;

    if (req.file) {
      console.log("req.file:", req.file);
      console.log("req.body:", req.body);

      try {
        const base64 = req.file.buffer.toString("base64");
        const dataURI = `data:${req.file.mimetype};base64,${base64}`;

        const cloudinary = getCloudinary();
        const uploadResponse = await cloudinary.uploader.upload(dataURI);

        photo = uploadResponse.secure_url;
      } catch (err) {
        const error = new Error("Image upload failed: " + err.message);
        error.statusCode = 500;
        return next(error);
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        firstName,
        lastName,
        phone,
        photo: photo || req.user.photo,
      },
      { new: true }
    );

    if (!updatedUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    res.json({ message: "User Updated Successfully", data: updatedUser });
  } catch (error) {
    next(error);
  }
};
