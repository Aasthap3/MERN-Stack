import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import job1 from "../assets/job-list1.png";
import job2 from "../assets/job-list2.png";
import job3 from "../assets/job-list3.png";
import job4 from "../assets/job-list4.png";
import { IoLocationOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "../config/api";
import ViewJobModal from "../components/RecruiterDashboard/Modals/ViewJobModal";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [appliedJob, setAppliedJob] = useState(null);

  const fetchALlJobs = async () => {
    try {
      const res = await axios.get("/public/allJobs");
      setJobs(res.data.data);
      toast.success(res.data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchALlJobs();
  }, []);

  const handleViewJob = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleApply = (job) => {
    setAppliedJob(job);
    setModalOpen(false);
    alert(`Applied for: ${job.jobTitle} at ${job.company}`);
  };
  return (
    <>
      <div className="mt-50 mx-45">
        <div className="headings text-center grid gap-6 mb-25">
          <h5 className="text-pink-500 text-[1.1rem]">RECENT JOBS</h5>
          <h1 className="font-mulish text-5xl">Featured Jobs</h1>
        </div>
        <div className="grid justify-center">
          {jobs.length === 0 && <div>Loading jobs...</div>}
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="job-list flex my-5 hover:shadow-2xl p-5 gap-6 w-fit"
            >
              <div className="job-des px-5 grid gap-3 py-2">
                <div className="job-title">
                  <h3 className="text-xl">{job.jobTitle}</h3>
                </div>
                <div className="job-details flex text-gray-500 gap-15">
                  <span>{job.company}</span>
                  <span className=" inline-flex">
                    <IoLocationOutline />
                    {job.jobLocation}
                  </span>
                  <span>{job.salaryRange}</span>
                </div>
              </div>
              <div className="job-apply grid gap-2 p-2">
                <div className="job-btn">
                  <button className="border border-[#8b92dd] text-[#8b92dd] py-1 px-4 rounded-2xl hover:bg-[#8b92dd] hover:text-white" onClick={() => handleViewJob(job)}>
                    View Job
                  </button>
                </div>
                <div className="job-time">
                  <span>7 hours ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ViewJobModal
          isOpen={isModalOpen}
          isClose={() => setModalOpen(false)}
          job={selectedJob}
          onApply={handleApply}
        />
      </div>
    </>
  );
};

export default Jobs;
