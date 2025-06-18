import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !address || !password) {
      console.log("All fields Required");
      res.status(400).json({ message: "All fields Required" });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already exists");
      res.status(409).json({ message: "Email already exists" });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      address,
      password: hashPassword
    });
    console.log(newUser);
    res.status(200).json({ message: "User Registered Succesfully" });
    
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = (req, res) => {
  res.json({ message: "User Logged In Succesfully" });
};

export const userLogout = (req, res) => {
  res.json({ message: "User Logged Out Succesfully" });
};
