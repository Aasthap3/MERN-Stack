import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/api";
import toast from "react-hot-toast";
import Loading from "../assets/infinite-spinner.svg";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const {setUser, setIsLogin, setIsAdmin, setIsRecruiter} = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Data: ", loginData);

    try {
      const res = await axios.post("/auth/login", loginData);
      toast.success(res.data.message);
      sessionStorage.setItem("user", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      res.data.data.role === "Admin"
        ? (setIsAdmin(true), navigate("/adminDashboard"))
        : res.data.data.role === "User"
        ? navigate("/userDashboard")
        : (setIsRecruiter(true),navigate("/recruiterDashboard"));
    } catch (error) {
      const status = error?.response?.status || 503;
      const message = error?.response?.data?.message || "Service Unavailable";

      toast.error(`Error ${status} : ${message}`);
    } finally {
      setLoading(false);
    }
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-900"
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-900"
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
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
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememMe"
                className="h-4 w-4 accent-cyan-900"
              />
              <label htmlFor="rememMe" className="text-sm text-gray-500">
                Remember Me
              </label>
            </div>
            <div>
               <Link
              to={"/changePassword"}
              className="text-sm text-cyan-900 hover:underline"
            >
              Forgot Password?
            </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-900 text-white py-2 rounded hover:bg-cyan-900 transition-colors"
          >
            {loading ? (  
              <div className="flex gap-3 justify-center items-center h-full">
                <img src={Loading} alt="" className="h-[1rem]" />
                <span>Logging In...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              to={"/register"}
              className="text-cyan-900 hover:text-cyan-950"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
