import React from "react";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex justify-between fixed bg-white py-2 items-center w-[100%] px-20">
        <div>
          <img src={logo} alt="logo" className="h-14" />
        </div>
        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-6 gap-6">
            <li>
              <Link to={"/"} className=" text-lg hover:text-pink-500" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} className=" text-lg hover:text-pink-500" href="#">
                Find a Job
              </Link>
            </li>
            <li>
              <Link to={"/about"} className=" text-lg hover:text-pink-500" href="#">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className=" text-lg hover:text-pink-500" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button
            className=" bg-pink-500 text-md text-white px-6 py-3 hover:bg-pink-600"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
          <button
            className=" border border-pink-500 text-md text-pink-500 px-6 py-3 hover:bg-pink-600 hover:text-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <IoMdMenu className="text-3xl cursor-pointer md:hidden" />
        </div>
      </nav>
    </>
  );
};

export default Header;
