import React from "react";
import { SlClose } from "react-icons/sl";

const ViewJobModal = ({ isOpen, isClose, selectedJob }) => {
  if (!isOpen) return null;

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
            <h2 className="text-2xl font-bold mb-4">{selectedJob?.jobTitle}</h2>
            <p className="text-gray-700 mb-2">
                <strong>Company:</strong> {selectedJob?.company}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {selectedJob?.jobLocation}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Salary Range:</strong> {selectedJob?.salaryRange}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Work Mode:</strong> {selectedJob?.workMode}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Job Type:</strong> {selectedJob?.jobType}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Description:</strong> {selectedJob?.description}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Posted On:</strong> {new Date(selectedJob?.postedDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Preferred Qualification:</strong> {selectedJob?.preferredQualification}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>No. of Openings:</strong> {selectedJob?.numberOfOpenings}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Experiene Required:</strong> {selectedJob?.experienceRequired}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Application Deadline:</strong> {new Date(selectedJob?.applicationDeadline).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewJobModal;
