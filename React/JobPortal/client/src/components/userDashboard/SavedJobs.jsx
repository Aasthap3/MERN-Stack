import React from "react";

const SavedJobs = () => {
  return (
    <>
      <div className="m-5">
        <h1 className="font-mulish text-lg">Saved Jobs</h1>
        <div className="recent my-5 grid gap-2">
          <div className="bg-white p-5 flex">
            <div className="txt grid gap-0.5 w-9/10">
              <h3 className="font-medium">Senior Frontend Developer</h3>
              <span className="text-sm text-gray-500">Google Inc.</span>
              <span className="text-sm text-gray-500">
                Applied on: 12 June 2025
              </span>
            </div>
            <div className="btn">
                <span className="text-sm text-white bg-pink-500 p-3 mt-1 w-fit hover:bg-pink-600">
                Apply Now
              </span>
            </div>
          </div>
          <div className="bg-white p-5 flex">
            <div className="txt grid gap-0.5 w-9/10">
              <h3 className="font-medium">Senior Frontend Developer</h3>
              <span className="text-sm text-gray-500">Google Inc.</span>
              <span className="text-sm text-gray-500">
                Applied on: 12 June 2025
              </span>
            </div>
            <div className="btn">
                <span className="text-sm text-white bg-pink-500 p-3 mt-1 w-fit hover:bg-pink-600">
                Apply Now
              </span>
            </div>
          </div>
          <div className="bg-white p-5 flex">
            <div className="txt grid gap-0.5 w-9/10">
              <h3 className="font-medium">Senior Frontend Developer</h3>
              <span className="text-sm text-gray-500">Google Inc.</span>
              <span className="text-sm text-gray-500">
                Applied on: 12 June 2025
              </span>
            </div>
            <div className="btn">
                <span className="text-sm text-white bg-pink-500 p-3 mt-1 w-fit hover:bg-pink-600">
                Apply Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedJobs;
