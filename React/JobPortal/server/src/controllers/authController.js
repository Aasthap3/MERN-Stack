import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/auth.js";
import getCloudinary from "../config/cloudinary.js";
import OTP from "../models/otpModel.js";
import sendEmail from "../utils/emailService.js";

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

export const GenerateOTP = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      const error = new Error("Email is required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }    

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const hashedOtp = await bcrypt.hash(otp, 10);
    const genOTp = await OTP.create({
      email,
      otp: hashedOtp,
    });

    const emailBody = `
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
      <tr>
        <td style="text-align: center;">
          <p style="font-size: 16px; color: #555555;">Hi <strong>${existingUser.firstName}</strong>,</p>
          <p style="font-size: 16px; color: #555555;">
            Please use the OTP below to complete your verification process:
          </p>
          <div style="margin: 30px 0;">
            <span style="display: inline-block; background-color: #f54677; color: white; font-size: 24px; font-weight: bold; padding: 12px 24px; border-radius: 6px;">
              ${otp}
            </span>
          </div>
          <p style="font-size: 14px; color: #999999;">
            This OTP is valid for the next <strong>10 minutes</strong>.
            Do not share this code with anyone.
          </p>
          <p style="font-size: 14px; color: #999999;">
            If you did not request this, please ignore this email or contact our support team.
          </p>
          <p style="font-size: 16px; color: #333333; margin-top: 40px;">
            Thank you,<br />
            <strong>Job Finder Team</strong>
          </p>
        </td>
      </tr>
    </table>
    `;

    const emailSent = await sendEmail(
      email,
      "Your One Time Password (OTP) for Verification",
      emailBody
    );

    if (!emailSent) {
      const error = new Error("Failed to send OTP email");
      error.statusCode = 500;
      return next(error);
    }

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    next(error);
  }
};

export const VerifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      const error = new Error("Email and OTP are required");
      error.statusCode = 400;
      return next(error);
    }

    const otpRecord = await OTP.findOne({ email });

    if (!otpRecord) {
      const error = new Error("OTP not found or has expired");
      error.statusCode = 404;
      return next(error);
    }

    const isOtpValid = await bcrypt.compare(otp, otpRecord.otp);

    if (!isOtpValid) {
      const error = new Error("Invalid OTP. Please try again.");
      error.statusCode = 401;
      return next(error);
    }

    // OTP is valid, delete the record
    await OTP.deleteOne({ email });

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    next(error);
  }
};

export const ChangePassword = async (req, res, next) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      const error = new Error("Email and new password are required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    const emailBody = `
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
    <tr>
      <td style="text-align: center;">
          <p style="font-size: 16px; color: #555555;">
          Hi <strong>${user.firstName}</strong>,
        </p>
        <p style="font-size: 16px; color: #555555;">
          We're letting you know that your account password was changed successfully.
        </p>
        <p style="font-size: 16px; color: #555555;">
          If you made this change, you can safely ignore this message.
          <br />
          If you did <strong>not</strong> make this change, please <a href="#" style="color: #f54677; text-decoration: none;">contact our support team</a> immediately.
        </p>
        <p style="margin-top: 40px; font-size: 16px; color: #333333;">
          Thank you,<br />
          <strong>Job Finder Team</strong>
        </p>
      </td>
    </tr>
  </table>
    `;

    await sendEmail(
      email,
      "Your Password Has Been Changed",
      emailBody
    );

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    next(error);
  }
};