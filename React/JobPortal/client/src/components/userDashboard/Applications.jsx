import React, { useEffect, useState } from "react";
import axios from "../../config/api";
import toast from "react-hot-toast";

const Applications = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("applied");

  const fetchAppliedJobs = async () => {
    try {
      const res = await axios.post("/user/allAppliedJobs");
      setJobs(res.data.data);
      setFilteredJobs(res.data.data.filter((job) => job.status === "applied"));
    } catch (error) {
      toast.error(
        `Error ${error?.response?.status || "503"} : ${
          error?.response?.data?.message || "Service Unavailable"
        }`
      );
    }
  };

  const handleWithdraw = async (applicationId) => {
    if (window.confirm("Are you sure you want to withdraw this application?")) {
      try {
        const res = await axios.patch(`/user/withdraw/${applicationId}`);
        setJobs(res.data.data);
        setFilteredJobs(res.data.data || []);
      } catch (error) {
        toast.error("Failed to withdraw application");
      }
    }
  };

  const filterJobs = (jobsArray, filter) => {
    filter === "all"
      ? setFilteredJobs(jobsArray)
      : setFilteredJobs(jobsArray.filter((job) => job.status === filter));
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterJobs(jobs, status);
  };

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "applied":
        return "bg-blue-100 text-blue-800";
      case "interview":
        return "bg-yellow-100 text-yellow-800";
      case "offered":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "withdrawn":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="m-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-mulish text-lg">Applied Jobs</h1>
          <div className="flex gap-2">
            <button
              onClick={() => handleStatusFilter("all")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "all"
                  ? "bg-cyan-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All ({jobs.length})
            </button>
            <button
              onClick={handleStatusFilter("applied")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "applied"
                  ? "bg-cyan-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Applied ({jobs.filter((job) => job.status === "applied").length})
            </button>
            <button
              onClick={handleStatusFilter("interview")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "interview"
                  ? "bg-cyan-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Interview (
              {jobs.filter((job) => job.status === "interview").length})
            </button>
            <button
              onClick={handleStatusFilter("offered")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "offered"
                  ? "bg-cyan-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Offered ({jobs.filter((job) => job.status === "offered").length})
            </button>
            <button
              onClick={handleStatusFilter("rejected")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "rejected"
                  ? "bg-cyan-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Rejected ({jobs.filter((job) => job.status === "rejected").length}
              )
            </button>
            <button
              onClick={handleStatusFilter("withdrawn")}
              className={`px-3 py-1 rounded-full text-sm ${
                statusFilter === "withdrawn"
                  ? "bg-cyan-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Withdrawn (
              {jobs.filter((job) => job.status === "withdrawn").length})
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          {filteredJobs.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>
                {statusFilter === "all"
                  ? "No applied jobs found."
                  : `No ${statusFilter} jobs found.`}
              </p>
            </div>
          ) : (
            filteredJobs.map((application) => (
              <div
                key={application._id}
                className="border-b last:border-b-0 p-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">
                      {application.jobId.jobTitle}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {application.jobId.company}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Location:</span>{" "}
                      {application.jobId.jobLocation}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Salary:</span>{" "}
                      {application.jobId.salaryRange}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Work Mode:</span>{" "}
                      {application.jobId.workMode} • {application.jobId.jobType}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Applied on:</span>{" "}
                      {formatDate(application.appliedOn)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Recruiter:</span>
                      {application.recruiterID.firstName}{" "}
                      {application.recruiterID.lastName}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-col items-end gap-5">
                    <span
                      className={`px-3 py-1 text-sm rounded-full capitalize ${getStatusColor(
                        application.status
                      )}`}
                    >
                      {application.status}
                    </span>
                    {application.status === "applied" ||
                      (application.status === "interview" && (
                        <button
                          onClick={() => handleWithdraw(application._id)}
                          className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                          Withdraw
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Applications;

{
  /* <div className="recent my-5 grid gap-2">
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
        </div> */
}
