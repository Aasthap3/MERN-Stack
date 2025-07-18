import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "../config/api";
import ViewJobModal from "../components/Jobs/ViewJobModal";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchALlJobs = async () => {
    try {
      const res = await axios.get("/public/jobs");
      setJobs(res.data.data);
      toast.success(res.data.message);
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
              className="job-list flex my-5 border border-gray-200 hover:shadow-2xl p-5 gap-6 w-[60vw]"
            >
              <div className="job-des px-5 grid gap-3 py-2 w-8/10">
                <div className="job-title">
                  <h3 className="text-xl">{job.jobTitle}</h3>
                </div>
                <div className="job-details grid grid-cols-3 text-gray-500 gap-5">
                  <span>{job.company}</span>
                  <span className=" inline-flex">
                    <IoLocationOutline />
                    {job.jobLocation}
                  </span>
                  <span>{job.salaryRange}</span>
                </div>
              </div>
              <div className="job-apply grid gap-2 p-2 justify-center">
                <div className="job-btn">
                  <button className="border border-[#8b92dd] text-[#8b92dd] py-3 px-6 hover:bg-[#8b92dd] hover:text-white" onClick={() => handleViewJob(job)}>
                    View Job
                  </button>
                </div>
                <div className="job-time text-center">
                  <span>{new Date(job.applicationDeadline).toLocaleDateString("en-GB")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ViewJobModal
          isOpen={isModalOpen}
          isClose={() => setModalOpen(false)}
          job={selectedJob}
        />
      </div>
    </>
  );
};

export default Jobs;
