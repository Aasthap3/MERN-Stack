import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Comment: ", comment);

    setComment({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="name"
              name="name"
              value={comment.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              id="email"
              name="email"
              value={comment.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              id="password"
              name="password"
              value={comment.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors"
          >
            Register
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={"/login"} className="text-pink-500 hover:text-pink-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
