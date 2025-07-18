import React, { useEffect, useState } from "react";
import axios from "../../config/api";
import toast from "react-hot-toast";

const SavedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchSavedJobs = async () => {
    try {
      const res = await axios.get("/user/allSavedJobs");
      setJobs(res.data.data);
    } catch (error) {
      toast.error(
        `Error ${error?.response?.status || "503"} : ${
          error?.response?.data?.message || "Service Unavailable"
        }`
      );
    }
  };

  const handleApplyJob = async () => {
    try {
      const res = await axios.patch(
        `/user/applySaved?applicationId=${applicationId}`
      );
      setJobs(jobs.filter((job) => job._id !== applicationId));
      toast.success(
        res.data.message || "Job application submitted successfuly!"
      );
    } catch (error) {
      toast.error(
        `Failed to apply: ${error?.response?.data?.message || "Unknown error"}`
      );
    }
  };

  const handleUnsaveJob = async (applicationId) => {
    if (
      window.confirm("Are you sure you want to remove this job from saved?")
    ) {
      try {
        const res = await axios.delete(`/user/unsave/${applicationId}`);
        toast.success(res.data.message);
      } catch (error) {
        toast.error(
          `Failed to remove job: ${
            error?.response?.data?.message || "Unknown Error"
          }`
        );
      }
    }
  };

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "saved":
        return "bg-purple-100 text-purple-800";
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
        <h1 className="font-mulish text-lg">Saved Jobs</h1>
        <div className="bg-white rounded-lg shadow">
          {jobs.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No jobs have been saved.</p>
            </div>
          ) : (
            jobs.map((application) => (
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
                      <span className="font-medium">Location: </span>
                      {application.jobId.jobLocation}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Salary: </span>
                      {application.jobId.salaryRange}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Work Mode: </span>
                      {application.jobId.workMode} • {application.jobId.jobType}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Saved on: </span>
                      {formatDate(application.appliedOn)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Recruiter: </span>
                      {application.recruiterId.firstName}{" "}
                      {application.recruiterId.lastName}
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
                    {application.status === "saved" && (
                      <button
                        onClick={() =>
                          handleApplyJob(application._id, application.jobId._id)
                        }
                        className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      >
                        Apply Now
                      </button>
                    )}
                    <button
                      onClick={() => handleUnsaveJob(application._id)}
                      className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      {application.status === "saved" ? "Unsave" : "Remove"}
                    </button>
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

export default SavedJobs;

{
  /* <div className="recent my-5 grid gap-2">
  {[1, 2, 3].map((item) => (
    <div key={item} className="bg-white p-5 flex">
      <div className="txt grid gap-0.5 w-9/10">
        <h3 className="font-medium">Senior Frontend Developer</h3>
        <span className="text-sm text-gray-500">Google Inc.</span>
        <span className="text-sm text-gray-500">Applied on: 12 June 2025</span>
      </div>
      <div className="btn">
        <span className="text-sm text-white bg-pink-500 p-3 mt-1 w-fit hover:bg-pink-600">
          Apply Now
        </span>
      </div>
    </div>
  ))}
</div>; */
}
