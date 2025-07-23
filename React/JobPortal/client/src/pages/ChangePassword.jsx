import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "../config/api";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (!isEmailSent) {
        const res = await axios.post("/auth/generateOtp", {
          email: forgotPasswordData.email,
        });
        setIsEmailSent(true);
        toast.success(res.data.message);
      } else if (!isOtpVerified) {
        const res = await axios.post("/auth/verifyOtp", {
          email: forgotPasswordData.email,
          otp: forgotPasswordData.otp,
        });
        setIsOtpVerified(true);
        toast.success(res.data.message);
      } else if (isEmailSent && isOtpVerified) {
        if (
          forgotPasswordData.newPassword !==
          forgotPasswordData.confirmNewPassword
        ) {
          toast.error("Passwords do not match");
          return;
        }
        const res = await axios.patch("/auth/changePassword", {
          email: forgotPasswordData.email,
          newPassword: forgotPasswordData.newPassword,
        });
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error("Something went wrong, please try again later");
      }
    } catch (error) {
      toast.error(
        `Error: ${error.response?.data?.message || "Something went wrong"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md my-35">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={forgotPasswordData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={isEmailSent}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">OTP</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={forgotPasswordData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            disabled={!isEmailSent || isOtpVerified}
            required
          />
        </div>
        {isOtpVerified && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={forgotPasswordData.newPassword}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmNewPassword"
                value={forgotPasswordData.confirmNewPassword}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full bg-cyan-900 text-white p-2 rounded-md hover:bg-cyan-800"
          onClick={handleClick}
        >
          {isLoading
            ? "Processing..."
            : isEmailSent
            ? isOtpVerified
              ? "Change Password"
              : "Verify OTP"
            : "Send OTP"}
        </button>
      </div>
    </>
  );
};

export default ChangePassword;
