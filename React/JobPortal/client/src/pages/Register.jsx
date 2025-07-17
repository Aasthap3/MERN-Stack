import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/api";
import toast from "react-hot-toast";
import Loading from "../assets/infinite-spinner.svg";
import { LuEye, LuEyeOff } from "react-icons/lu";

const role = [
  { value: "User", display: "Searching for Job" },
  { value: "Recruiter", display: "Recruiter" },
];

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [cfpasswordVisible, setCfPasswordVisible] = useState(false);

  const [error, setError] = useState("");

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    const errors = {};
    if (
      !/^[a-zA-Z]+$/.test(registerData.firstName) ||
      registerData.firstName < 2 ||
      (registerData.lastName && !/^[a-zA-Z]+$/.test(registerData.lastName))
    ) {
      errors.name =
        "Please enter a valid name (only letters, at least 3 characters)";
      isValid = false;
    }

    if (!/^[a-zA-Z0-9._]+@gmail.com$/.test(registerData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (
      !/^[6-9]\d{9}$/.test(registerData.phone) ||
      registerData.phone.length !== 10
    ) {
      errors.phone = "Please enter a valid phone number(10 digits)";
      isValid = false;
    }

    if (!registerData.role) {
      errors.role = "Please select a role";
      isValid = false;
    }

    if (!registerData.address || registerData.address.length < 10) {
      errors.address = "Please enter a valid address (at least 10 characters)";
      isValid = false;
    }

    if (
      !registerData.password ||
      registerData.password < 6 ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?.,_]).{6,20}$/.test(
        registerData.password
      )
    ) {
      errors.password =
        "Password must be at least 6 characters long and contains uppercase letter, lowercase letter, number and special Character";
      isValid = false;
    }

    if (registerData.password !== registerData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setError(errors);
    if (!isValid) {
      toast.error("Please fix the errors before submitting");
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validate()) {
      setLoading(false);
      return;
    }

    console.log("Data: ", registerData);

    try {
      const res = await axios.post("/auth/register", registerData);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(
        `Error ${error?.response?.status || "503"} : ${
          error?.response?.data?.message || "Service Unavailable"
        }`
      );
    } finally {
      setLoading(false);
    }

    setRegisterData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form
          className="bg-white p-10 mt-10 mb-15 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-extrabold mb-8 text-center text-cyan-900 tracking-wide">
            Create Your Account
          </h2>
          <div className="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={registerData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={registerData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            {error.name && (
              <div className="text-red-500 text-sm mb-2 mt-[-2vh]">
                {error.name}
              </div>
            )}
          </div>
          <div className="grid">
            <div className="mb-6">
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={registerData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                placeholder="Enter your email"
              />
            </div>
            {error.email && (
              <div className="text-red-500 text-sm mb-2 mt-[-2vh]">
                {error.email}
              </div>
            )}
          </div>
          <div className="grid">
            <div className="mb-6">
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={registerData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                placeholder="Enter your phone number"
              />
            </div>
            {error.phone && (
              <div className="text-red-500 text-sm mb-2 mt-[-2vh]">
                {error.phone}
              </div>
            )}
          </div>
          <div className="grid">
            <div className="mb-3">
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="role"
              >
                I am:
              </label>
              <select
                name="role"
                id="role"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                value={registerData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                {role.length ? (
                  role.map((opt, index) => (
                    <option value={opt.value} key={index}>
                      {opt.display}
                    </option>
                  ))
                ) : (
                  <option value="">--No Role Found--</option>
                )}
              </select>
            </div>
            {error.role && (
              <div className="text-red-500 text-sm mb-3">{error.role}</div>
            )}
          </div>
          <div className="grid">
            <div className="mb-6">
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={registerData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                placeholder="Enter your address"
              />
            </div>
            {error.address && (
              <div className="text-red-500 text-sm mb-2 mt-[-2vh]">
                {error.address}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  value={registerData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute right-1 border-s-2 border-gray-100 p-1 bg-white"
                  onClick={(e) => {
                    passwordVisible
                      ? setPasswordVisible(false)
                      : setPasswordVisible(true);
                  }}
                >
                  {passwordVisible ? <LuEye /> : <LuEyeOff />}
                </span>
              </div>
              {error.password && (
                <div className="text-red-500 text-sm mb-2 mt-[-2vh]">
                  {error.password}
                </div>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={cfpasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={registerData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                  placeholder="Re-enter your password"
                />
                <span
                  className="absolute right-1 border-s-2 border-gray-100 p-1 bg-white"
                  onClick={(e) => {
                    cfpasswordVisible
                      ? setCfPasswordVisible(false)
                      : setCfPasswordVisible(true);
                  }}
                >
                  {cfpasswordVisible ? <LuEye /> : <LuEyeOff />}
                </span>
              </div>

              {error.confirmPassword && (
                <div className="text-red-500 text-sm mb-2 mt-[-2vh]">
                  {error.confirmPassword}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-900 hover:bg-cyan-950 text-white py-3 rounded-lg font-semibold text-lg shadow-md"
          >
            {loading ? (
              <div className="flex gap-3 justify-center items-center h-full">
                <img src={Loading} alt="" className="h-[1rem]" />
                <span>Creating Account...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="text-cyan-900 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
