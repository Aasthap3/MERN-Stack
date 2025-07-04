import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import ViewJobModal from "./Modals/viewJobModal";
import EditJobModal from "./Modals/EditJobModal";
import AddJobModal from "./Modals/AddJobModal";
import { useState } from "react";

const PostedJobs = [
  {
    jobTitle: "Frontend Developer",
    company: "TechNova Solutions",
    salaryRange: "₹5,00,000 - ₹7,50,000 per annum",
    description:
      "We're looking for a skilled frontend developer with expertise in React.js and modern UI/UX design principles.",
    preferedQualification: "B.Tech in Computer Science or equivalent",
    experienceRequired: "1-3 years",
    jobLocation: "Bangalore, India",
    jobType: "Full-time",
    workMode: "On-site",
    numberOfOpenings: 3,
    postedDate: "2025-06-25",
    applicationDeadline: "2025-07-15",
  },
  {
    jobTitle: "Backend Developer",
    company: "CloudCore Labs",
    salaryRange: "₹6,50,000 - ₹10,00,000 per annum",
    description:
      "Looking for a backend developer skilled in Node.js, Express, and MongoDB. Knowledge of microservices is a plus.",
    preferedQualification: "B.E./B.Tech/MCA",
    experienceRequired: "2-4 years",
    jobLocation: "Remote",
    jobType: "Remote - Full-time",
    workMode: "Remote",
    numberOfOpenings: 2,
    postedDate: "2025-06-20",
    applicationDeadline: "2025-07-10",
  },
  {
    jobTitle: "UI/UX Designer",
    company: "DesignNest Studio",
    salaryRange: "₹4,00,000 - ₹6,00,000 per annum",
    description:
      "Creative UI/UX designer with experience in Figma, Adobe XD, and user research techniques.",
    preferedQualification: "Bachelor’s Degree in Design/Visual Arts",
    experienceRequired: "1+ years",
    jobLocation: "Hyderabad, India",
    jobType: "Full-time",
    workMode: "Hybrid",
    numberOfOpenings: 1,
    postedDate: "2025-06-28",
    applicationDeadline: "2025-07-20",
  },
  {
    jobTitle: "Data Analyst Intern",
    company: "QuantEdge Analytics",
    salaryRange: "₹10,000 - ₹15,000 per month",
    description:
      "Internship role for data analysis and visualization using Python, Excel, and Power BI.",
    preferedQualification:
      "Pursuing or completed B.Sc/M.Sc in Statistics/Data Science",
    experienceRequired: "Fresher/Intern",
    jobLocation: "Pune, India",
    jobType: "Internship",
    workMode: "On-site",
    numberOfOpenings: 4,
    postedDate: "2025-06-30",
    applicationDeadline: "2025-07-15",
  },
  {
    jobTitle: "Digital Marketing Specialist",
    company: "BrightEdge Media",
    salaryRange: "₹3,50,000 - ₹5,50,000 per annum",
    description:
      "Responsible for SEO, SEM, Google Ads campaigns, and managing social media channels.",
    preferedQualification: "MBA in Marketing or equivalent experience",
    experienceRequired: "1-2 years",
    jobLocation: "Delhi, India",
    jobType: "Full-time",
    workMode: "Hybrid",
    numberOfOpenings: 2,
    postedDate: "2025-06-27",
    applicationDeadline: "2025-07-25",
  },
];

const PostJobs = () => {
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddJobModalOpen, setAddJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center pb-5">
          <h2 className="text-2xl font-bold">Posted Jobs</h2>
          <button
            className="border p-3 rounded hover:text-pink-500 flex gap-2 items-center"
            onClick={() => setAddJobModalOpen(true)}
          >
            Post A New Job
          </button>
        </div>
        <div className="bg-white rounded-lg shadow">
          {PostedJobs.map((job, index) => (
            <div
              key={index}
              className="border-b last:border-b-0 p-4 flex justify-between"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg">{job.jobTitle}</h4>
                  <p className="text-gray-600 text-sm mt-1">{job.company}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.salaryRange}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.jobLocation} · {job.workMode}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{job.jobType}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setViewModalOpen(true);
                  }}
                >
                  <FaEye className="text-blue-400" />
                </button>
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setEditModalOpen(true);
                  }}
                >
                  <FaEdit className="text-yellow-500" />
                </button>
                <button onClick={() => handleDeleteJob(job)}>
                  <FaTrash className="text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ViewJobModal
        isOpen={isViewModalOpen}
        isClose={() => setViewModalOpen(false)}
        selectedJob={selectedJob}
      />
      <EditJobModal
        isOpen={isEditModalOpen}
        isClose={() => setEditModalOpen(false)}
        selectedJob={selectedJob}
      />

      <AddJobModal
        isOpen={isAddJobModalOpen}
        isClose={() => setAddJobModalOpen(false)}
      />
    </>
  );
};

export default PostJobs;
