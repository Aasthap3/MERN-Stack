import React from "react";

const Applications = () => {
  return (
    <>
      <div className="m-5">
        <h1 className="font-mulish text-lg">Applied Jobs</h1>
        <div className="recent my-5 grid gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div key={item} className="bg-white p-5 flex justify-between">
              <div className="txt grid gap-0.5">
                <h3 className="font-medium">Senior Frontend Developer</h3>
                <span className="text-sm text-gray-500">Google Inc.</span>
                <span className="text-sm text-gray-500">
                  Applied on: 12 June 2025
                </span>
              </div>
              <div className="btn">
                <span className="text-sm text-indigo-800 bg-indigo-200 rounded-2xl px-2.5 py-1.5 mt-1 w-fit hover:bg-indigo-300">
                  In Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Applications;
