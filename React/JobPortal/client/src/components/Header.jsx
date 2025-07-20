import React, { useState } from "react";
import logo from "../assets/jobify-logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const {
    user,
    setUser,
    isLogin,
    isAdmin,
    isRecruiter,
    setIsLogin,
    setIsAdmin,
    setIsRecruiter,
  } = useAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    isRecruiter
      ? navigate("/recruiterDashboard")
      : isAdmin
      ? navigate("/adminDashboard")
      : navigate("/userDashboard");
  };

  return (
    <>
      <nav className="sticky flex justify-between bg-white py-2 items-center w-[100%] px-20">
        <div>
          <img src={logo} alt="logo" className="h-8" />
        </div>
        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-6 gap-6">
            <li>
              <Link to={"/"} className=" text-lg hover:text-cyan-900" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/jobs"}
                className=" text-lg hover:text-cyan-900"
                href="#"
              >
                Find a Job
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className=" text-lg hover:text-cyan-900"
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className=" text-lg hover:text-cyan-900"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {user ? (
          <button
            className="py-2 px-4 flex gap-2 justify-center items-center border border-cyan-900 text-cyan-900 text-md hover:bg-cyan-950 hover:text-white rounded-md"
            onClick={handleClick}
          >
            <img
              src={user.photo}
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <span>{user.firstName}</span>
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button
              className=" bg-cyan-900 text-md text-white px-6 py-3 hover:bg-cyan-950"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
            <button
              className=" border border-cyan-900 text-md text-cyan-900 px-6 py-3 hover:bg-cyan-950 hover:text-white"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <IoMdMenu className="text-3xl cursor-pointer md:hidden" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
