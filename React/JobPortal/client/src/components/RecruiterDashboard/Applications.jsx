import React, { useState, useEffect } from "react";
import axios from "../../config/api";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiBriefcase,
  FiX,
  FiClock,
  FiAward,
} from "react-icons/fi";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [statusFilter, setStatusFilter] = useState("applied");
  const [selectedJob, setSelectedJob] = useState("all");
  const [loading, setLoading] = useState(false);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/recruiter/allApplications");
      setApplications(res.data.data);
      // Apply default filter (applied status, all jobs)
      filterApplications(res.data.data, "applied", "all");
    } catch (error) {
      toast.error(
        `Error ${error?.response?.status || "503"} : ${
          error?.response?.data?.message || "Service Unavailable"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (applicationId, newStatus) => {
    try {
      await axios.patch(`/recruiter/application/${applicationId}/status`, {
        status: newStatus,
      });

      setApplications(
        applications.map((app) =>
          app._id === applicationId ? { ...app, status: newStatus } : app
        )
      );
      filterApplications(
        applications.map((app) =>
          app._id === applicationId ? { ...app, status: newStatus } : app
        ),
        statusFilter,
        selectedJob
      );
      toast.success(`Application status updated to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update application status");
    }
  };

  const filterApplications = (appList, status, job) => {
    let filtered = appList;

    if (status !== "all") {
      filtered = filtered.filter((app) => app.status === status);
    }

    if (job && job !== "all") {
      filtered = filtered.filter((app) => app.jobId._id === job);
    }

    setFilteredApplications(filtered);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterApplications(applications, status, selectedJob);
  };

  const handleJobFilter = (jobId) => {
    setSelectedJob(jobId);
    filterApplications(applications, statusFilter, jobId);
  };

  useEffect(() => {
    fetchApplications();
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

  const uniqueJobs = [
    ...new Map(applications.map((app) => [app.jobId._id, app.jobId])).values(),
  ];

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="m-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Job Applications</h2>
          <div className="text-sm text-gray-500">
            {filteredApplications.length} of {applications.length} applications
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-4 flex justify-between">
          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Status:
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleStatusFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  statusFilter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All ({applications.length})
              </button>
              {["applied", "interview", "offered", "rejected", "withdrawn"].map(
                (status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusFilter(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                      statusFilter === status
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {status} (
                    {applications.filter((app) => app.status === status).length}
                    )
                  </button>
                )
              )}
            </div>
          </div>

          {/* Job Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Job:
            </label>
            <select
              value={selectedJob}
              onChange={(e) => handleJobFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Jobs</option>
              {uniqueJobs.map((job) => (
                <option key={job._id} value={job._id}>
                  {job.jobTitle} - {formatDate(job.postedDate)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-lg shadow-lg">
          {filteredApplications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <FiBriefcase className="mx-auto text-4xl mb-4 text-gray-300" />
              <p className="text-lg">
                {statusFilter === "all" && selectedJob === "all"
                  ? "No applications found."
                  : `No ${
                      statusFilter !== "all" ? statusFilter : ""
                    } applications found for the selected criteria.`}
              </p>
            </div>
          ) : (
            filteredApplications.map((application) => (
              <div
                key={application._id}
                className="border-b last:border-b-0 p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    {/* Job Information */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {application.jobId.jobTitle}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FiBriefcase className="text-gray-400" />
                          {application.jobId.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin className="text-gray-400" />
                          {application.jobId.jobLocation}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiCalendar className="text-gray-400" />
                          {application.jobId.workMode} •{" "}
                          {application.jobId.jobType}
                        </span>
                      </div>
                    </div>

                    {/* Applicant Information */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FiUser className="text-blue-500" />
                        Applicant Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <FiUser className="text-gray-400 text-sm" />
                          <span className="text-sm">
                            <span className="font-medium">Name:</span>{" "}
                            {application.userId.firstName}{" "}
                            {application.userId.lastName}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMail className="text-gray-400 text-sm" />
                          <span className="text-sm">
                            <span className="font-medium">Email:</span>{" "}
                            {application.userId.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiPhone className="text-gray-400 text-sm" />
                          <span className="text-sm">
                            <span className="font-medium">Phone:</span>{" "}
                            {application.userId.phone}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiCalendar className="text-gray-400 text-sm" />
                          <span className="text-sm">
                            <span className="font-medium">Applied on:</span>{" "}
                            {formatDate(application.appliedOn)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="ml-6 flex flex-col items-end gap-4">
                    <span
                      className={`px-4 py-2 text-sm rounded-full font-medium capitalize ${getStatusColor(
                        application.status
                      )}`}
                    >
                      {application.status}
                    </span>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      {application.status === "applied" && (
                        <>
                          <button
                            onClick={() =>
                              updateApplicationStatus(
                                application._id,
                                "interview"
                              )
                            }
                            className="px-3 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors flex items-center gap-1"
                          >
                            <FiClock className="text-xs" />
                            Schedule Interview
                          </button>
                          <button
                            onClick={() =>
                              updateApplicationStatus(
                                application._id,
                                "rejected"
                              )
                            }
                            className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center gap-1"
                          >
                            <FiX className="text-xs" />
                            Reject
                          </button>
                        </>
                      )}

                      {application.status === "interview" && (
                        <>
                          <button
                            onClick={() =>
                              updateApplicationStatus(
                                application._id,
                                "offered"
                              )
                            }
                            className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors flex items-center gap-1"
                          >
                            <FiAward className="text-xs" />
                            Make Offer
                          </button>
                          <button
                            onClick={() =>
                              updateApplicationStatus(
                                application._id,
                                "rejected"
                              )
                            }
                            className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center gap-1"
                          >
                            <FiX className="text-xs" />
                            Reject
                          </button>
                        </>
                      )}

                      {/* View Profile Button */}
                      <button
                        onClick={() =>
                          window.open(
                            `mailto:${application.userId.email}`,
                            "_blank"
                          )
                        }
                        className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-1"
                      >
                        <FiMail className="text-xs" />
                        Contact
                      </button>
                    </div>
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
