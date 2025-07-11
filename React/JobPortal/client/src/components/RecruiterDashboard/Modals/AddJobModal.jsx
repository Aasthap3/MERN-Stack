import React, { useState } from "react";
import { SlClose } from "react-icons/sl";
import toast from "react-hot-toast";
import axios from "../../../config/api";

const AddJobModal = ({ isOpen, isClose }) => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    company: "",
    jobLocation: "",
    salaryRange: "",
    workMode: "",
    jobType: "",
    description: "",
    preferredQualification: "",
    numberOfOpenings: "",
    experienceRequired: "",
    applicationDeadline: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/recruiter/addJob", jobData);
      toast.success(res.data.message);
      setJobData({
        jobTitle: "",
        company: "",
        jobLocation: "",
        salaryRange: "",
        workMode: "",
        jobType: "",
        description: "",
        preferredQualification: "",
        numberOfOpenings: "",
        experienceRequired: "",
        applicationDeadline: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
    isClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 p-30 z-50">
        <div className="h-[80vh] w-full max-w-4xl mx-auto border bg-white rounded-xl overflow-y-auto scrollbar-hide">
          <div className="flex justify-between py-5 px-10 border-b-2 sticky top-0 bg-green-50">
            <h1 className="text-2xl font-bold text-gray-800">Add New Job</h1>
            <button onClick={isClose}>
              <SlClose className="text-2xl text-red-500 hover:text-red-700" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="text-sm">
              <b>Note : </b> Please Follow the format mentioned as sample
              inputs.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={jobData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Frontend Developer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={jobData.company}
                  onChange={handleInputChange}
                  placeholder="TechNova Solutions"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="jobLocation"
                  value={jobData.jobLocation}
                  onChange={handleInputChange}
                  placeholder="Bangalore, India"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Range
                </label>
                <input
                  type="text"
                  name="salaryRange"
                  value={jobData.salaryRange}
                  onChange={handleInputChange}
                  placeholder="₹5,00,000 - ₹7,50,000 per annum"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Mode *
                </label>
                <select
                  name="workMode"
                  value={jobData.workMode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Work Mode</option>
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type *
                </label>
                <select
                  name="jobType"
                  value={jobData.jobType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Openings
                </label>
                <input
                  type="number"
                  name="numberOfOpenings"
                  value={jobData.numberOfOpenings}
                  onChange={handleInputChange}
                  placeholder="3"
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Required
                </label>
                <input
                  type="text"
                  name="experienceRequired"
                  value={jobData.experienceRequired}
                  onChange={handleInputChange}
                  placeholder="1-3 years"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application Deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  value={jobData.applicationDeadline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description *
              </label>
              <textarea
                name="description"
                value={jobData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="We're looking for a skilled frontend developer with expertise in React.js and modern UI/UX design principles."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Qualifications
              </label>
              <textarea
                name="preferredQualification"
                value={jobData.preferredQualification}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="B.Tech in Computer Science or equivalent"
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={isClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJobModal;
