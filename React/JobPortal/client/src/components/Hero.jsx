import React from "react";

const Hero = () => {
  return (
    <>
      <div className=' bg-[url("../h1_hero.jpg")] h-[90vh] bg-cover flex flex-col'>
        <h1 className="font-mulish text-7xl text-indigo-950 w-[40.5vw] pt-45 pl-35">
          Find the most exciting startup jobs
        </h1>
        <div className="flex pl-35 pt-20">
          <form action="#">
            <input
              type="text"
              placeholder="Job Tittle or keyword"
              className="bg-white py-6 px-15 border-r-1 border-gray-400"
            />
            <select name="select" className="bg-white text-gray-500 py-6 px-15">
              <option value="">Location BD</option >
              <option value="">Location PK</option>
              <option value="">Location US</option>
              <option value="">Location UK</option>
            </select>
            <button className="bg-pink-500 py-6 px-15 text-white">Find job</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
