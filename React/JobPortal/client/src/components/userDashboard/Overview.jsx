import axios from "../../config/api";
import React, { useEffect, useState } from "react";
import {
  FiBriefcase,
  FiSend,
  FiAward,
  FiCalendar,
  FiX,
  FiMinus,
  FiBookmark,
} from "react-icons/fi";

const Overview = () => {
  const [allJobs, setAllJobs] = useState([]);

  const fetchAllJobs = async () => {
    try {
      const res = await axios.get("/user/AllJobs");
      setAllJobs(res.data.data);
    } catch (error) {
      console.log("Error fetching jobs: ", error);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <>
      <div className="m-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium opacity-90">Total Jobs</h3>
                <p className="text-3xl font-bold mt-2">{allJobs.length}</p>
              </div>
              <FiBriefcase className="text-3xl opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium opacity-90">Applied Jobs</h3>
                <p className="text-3xl font-bold mt-2">
                  {allJobs.filter((job) => job.status === "applied").length}
                </p>
              </div>
              <FiSend className="text-3xl opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium opacity-90">Offered</h3>
                <p className="text-3xl font-bold mt-2">
                  {allJobs.filter((job) => job.status === "offered").length}
                </p>
              </div>
              <FiAward className="text-3xl opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium opacity-90">Interviews</h3>
                <p className="text-3xl font-bold mt-2">
                  {allJobs.filter((job) => job.status === "interview").length}
                </p>
              </div>
              <FiCalendar className="text-3xl opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium opacity-90">Rejected</h3>
                <p className="text-3xl font-bold mt-2">
                  {allJobs.filter((job) => job.status === "rejected").length}
                </p>
              </div>
              <FiX className="text-3xl opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-500 to-gray-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium opacity-90">Withdrawn</h3>
                <p className="text-3xl font-bold mt-2">
                  {allJobs.filter((job) => job.status === "withdrawn").length}
                </p>
              </div>
              <FiMinus className="text-3xl opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium opacity-90">Saved Jobs</h3>
                <p className="text-3xl font-bold mt-2">
                  {allJobs.filter((job) => job.status === "saved").length}
                </p>
              </div>
              <FiBookmark className="text-3xl opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
