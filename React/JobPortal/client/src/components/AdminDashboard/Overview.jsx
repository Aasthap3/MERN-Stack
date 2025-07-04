import React from "react";

const Overview = () => {
  return (
    <>
      <div className="m-6">
        <h1 className="font-mulish text-xl">Overview</h1>
        <div className="summary flex gap-4 my-5">
          <div className="bg-white rounded-lg p-5 w-100">
            <p className="text-[1.1rem]">Total Applications</p>
            <p className="text-[1.1rem] font-mulish">12</p>
          </div>
          <div className="bg-white rounded-lg p-5 w-100">
            <p className="text-[1.1rem]">Total Applications</p>
            <p className="text-[1.1rem] font-mulish">12</p>
          </div>
          <div className="bg-white rounded-lg p-5 w-100">
            <p className="text-[1.1rem]">Total Applications</p>
            <p className="text-[1.1rem] font-mulish">12</p>
          </div>
        </div>
        <h1 className="text-lg font-bold text-gray-700">Recent Applications</h1>
        <div className="recent my-5 grid gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-5 grid gap-0.5">
              <h3 className="font-medium">Senior Frontend Developer</h3>
              <span className="text-sm text-gray-500">Google Inc.</span>
              <span className="text-sm text-gray-500">
                Applied on: 12 June 2025
              </span>
              <span className="text-sm text-indigo-800 bg-indigo-200 px-2 py-1 mt-1 rounded-2xl w-fit">
                In Review
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Overview;
