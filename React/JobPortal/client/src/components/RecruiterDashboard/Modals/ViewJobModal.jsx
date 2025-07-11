import React from "react";
import { SlClose } from "react-icons/sl";

const ViewJobModal = ({ isOpen, isClose, job, onApply }) => {
  if (!isOpen || !job) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 p-30">
        <div className="h-[80vh] w-full max-w-4xl mx-auto border bg-white rounded-xl overflow-y-auto scrollbar-hide">
          <div className="flex justify-between py-5 px-10 sticky top-0 bg-pink-500">
            <h1 className="text-2xl text-white font-bold">View Posted Job</h1>
            <button onClick={isClose}>
              <SlClose className="text-2xl text-white" />
            </button>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{job?.jobTitle}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Company:</strong> {job?.company}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> {job?.jobLocation}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Salary Range:</strong> {job?.salaryRange}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Work Mode:</strong> {job?.workMode}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Job Type:</strong> {job?.jobType}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Description:</strong> {job?.description}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Posted On:</strong>{" "}
              {new Date(job?.postedDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Preferred Qualification:</strong>{" "}
              {job?.preferredQualification}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>No. of Openings:</strong> {job?.numberOfOpenings}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Experiene Required:</strong> {job?.experienceRequired}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Application Deadline:</strong>{" "}
              {new Date(job?.applicationDeadline).toLocaleDateString()}
            </p>
            <button className="px-6 py-2 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
            onClick={() => onApply(job)}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewJobModal;
