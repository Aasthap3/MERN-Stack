import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 md:px-10 bg-gradient-to-br from-blue-100 to-cyan-100">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h1 className="font-mulish text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-900 text-center leading-tight drop-shadow-md">
          Find the most exciting <span className="bg-cyan-900 bg-clip-text text-transparent">startup jobs</span>
        </h1>
        <form className="w-full  backdrop-blur-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-2">
          <input
            type="text"
            placeholder="Job Title or keyword"
            className="flex-1 w-1/3 md:min-w-[220px] bg-white py-4 px-8 border border-gray-300 rounded-lg text-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          />
          <select
            name="location"
            className="flex-1 w-1/3 md:min-w-[180px] bg-white py-4 px-8 border border-gray-300 rounded-lg text-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
          >
            <option value="">Location BD</option>
            <option value="">Location PK</option>
            <option value="">Location US</option>
            <option value="">Location UK</option>
          </select>
          <button
            type="submit"
            className="flex items-center gap-2 bg-cyan-900 text-white py-4 px-8 rounded-lg font-semibold shadow hover:bg-cyan-950 transition"
          >
            <FaSearch className="text-lg hover:scale-110 transition" />
            Find job
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;