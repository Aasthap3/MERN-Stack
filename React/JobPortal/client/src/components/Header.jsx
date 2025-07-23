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

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    isRecruiter
      ? navigate("/recruiterDashboard")
      : isAdmin
      ? navigate("/adminDashboard")
      : navigate("/userDashboard");
  };

  const navLinks = (
    <ul className="flex flex-col md:flex-row md:items-center gap-6">
      <li>
        <Link to="/" className="text-lg hover:text-cyan-700 transition">Home</Link>
      </li>
      <li>
        <Link to="/jobs" className="text-lg hover:text-cyan-700 transition">Find a Job</Link>
      </li>
      <li>
        <Link to="/about" className="text-lg hover:text-cyan-700 transition">About</Link>
      </li>
      <li>
        <Link to="/contact" className="text-lg hover:text-cyan-700 transition">Contact</Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md rounded-b-xl flex justify-between items-center w-full h-[10vh] px-4 md:px-20 py-2">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto drop-shadow" />
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center px-5">
          {navLinks}
        </div>
        {/* User/Buttons */}
        {user ? (
          <button
            className="py-2 px-4 flex gap-2 justify-center items-center border border-cyan-900 text-cyan-900 text-md hover:bg-cyan-950 hover:text-white rounded-md shadow transition"
            onClick={handleClick}
          >
            <img
              src={user.photo}
              alt="profile"
              className="h-10 w-10 object-cover rounded-full border border-cyan-200"
            />
            <span className="font-semibold">{user.firstName}</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 md:gap-4">
            {/* Show Register/Login only on md and up */}
            <button
              className="hidden md:block bg-cyan-900 text-md text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-950"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              className="hidden md:block border border-cyan-900 text-md text-cyan-900 px-6 py-3 rounded-lg shadow hover:bg-cyan-950 hover:text-white transition"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            {/* Mobile Menu Icon */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-cyan-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <IoMdMenu className="text-3xl" />
            </button>
          </div>
        )}
      </nav>
      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/40 z-40 transition ${menuOpen ? "block" : "hidden"}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="absolute top-0 left-0 w-full bg-white shadow-lg rounded-bl-2xl p-6 flex flex-col gap-6"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="self-end text-2xl text-cyan-900 mb-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {navLinks}
          {!user && (
            <div className="flex gap-3 mt-4">
              <button
                className="bg-cyan-900 text-md text-white px-6 py-2 rounded-lg shadow hover:bg-cyan-950 w-fit"
                onClick={() => { setMenuOpen(false), navigate("/register"); }}
              >
                Register
              </button>
              <button
                className="border border-cyan-900 text-md text-cyan-900 px-6 py-2 rounded-lg shadow w-fit hover:bg-cyan-950 hover:text-white transition"
                onClick={() => { setMenuOpen(false), navigate("/login"); }}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
