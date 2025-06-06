import React from "react";
import { Link } from "react-router-dom";
import job1 from "../assets/job-list1.png";
import job2 from "../assets/job-list2.png";
import job3 from "../assets/job-list3.png";
import job4 from "../assets/job-list4.png";
import { IoLocationOutline } from "react-icons/io5";

const JobList = () => {
  return (
    <>
      <div className="mt-50 mx-45">
        <div className="headings text-center grid gap-6 mb-25">
          <h5 className="text-pink-500 text-[1.1rem]">RECENT JOBS</h5>
          <h1 className="font-mulish text-5xl">Featured Jobs</h1>
        </div>
        <div className="grid justify-center">
          <div className="job-list flex my-5 hover:shadow-2xl p-5 gap-6 w-fit">
            <div className="job-img">
              <Link to={"/"}>
                <img src={job1} alt="" />
              </Link>
            </div>
            <div className="job-des px-10 grid gap-3 py-2">
              <div className="job-title">
                <h3 className="text-xl">Digital Marketer</h3>
              </div>
              <div className="job-details flex text-gray-500 gap-15">
                <span>Creative Agency</span>
                <span className=" inline-flex">
                  <IoLocationOutline />
                  Athens, Greece
                </span>
                <span>$3500 - $4000</span>
              </div>
            </div>
            <div className="job-apply grid gap-2 p-2">
              <div className="job-btn">
                <button className="border border-[#8b92dd] text-[#8b92dd] py-1 px-4 rounded-2xl hover:bg-[#8b92dd] hover:text-white">Full Time</button>
              </div>
              <div className="job-time">
                <span>7 hours ago</span>
              </div>
            </div>
          </div>
          <div className="job-list flex my-5 hover:shadow-2xl p-5 gap-6 w-fit">
            <div className="job-img">
              <Link to={"/"}>
                <img src={job2} alt="" />
              </Link>
            </div>
            <div className="job-des px-10 grid gap-3 py-2">
              <div className="job-title">
                <h3 className="text-xl">Digital Marketer</h3>
              </div>
              <div className="job-details flex text-gray-500 gap-15">
                <span>Creative Agency</span>
                <span className=" inline-flex">
                  <IoLocationOutline />
                  Athens, Greece
                </span>
                <span>$3500 - $4000</span>
              </div>
            </div>
            <div className="job-apply grid gap-2 p-2">
              <div className="job-btn">
                <button className="border border-[#8b92dd] text-[#8b92dd] py-1 px-4 rounded-2xl hover:bg-[#8b92dd] hover:text-white">Full Time</button>
              </div>
              <div className="job-time">
                <span>7 hours ago</span>
              </div>
            </div>
          </div>
          <div className="job-list flex my-5 hover:shadow-2xl p-5 gap-6 w-fit">
            <div className="job-img">
              <Link to={"/"}>
                <img src={job3} alt="" />
              </Link>
            </div>
            <div className="job-des px-10 grid gap-3 py-2">
              <div className="job-title">
                <h3 className="text-xl">Digital Marketer</h3>
              </div>
              <div className="job-details flex text-gray-500 gap-15">
                <span>Creative Agency</span>
                <span className=" inline-flex">
                  <IoLocationOutline />
                  Athens, Greece
                </span>
                <span>$3500 - $4000</span>
              </div>
            </div>
            <div className="job-apply grid gap-2 p-2">
              <div className="job-btn">
                <button className="border border-[#8b92dd] text-[#8b92dd] py-1 px-4 rounded-2xl hover:bg-[#8b92dd] hover:text-white">Full Time</button>
              </div>
              <div className="job-time">
                <span>7 hours ago</span>
              </div>
            </div>
          </div>
          <div className="job-list flex my-5 hover:shadow-2xl p-5 gap-6 w-fit">
            <div className="job-img">
              <Link to={"/"}>
                <img src={job4} alt="" />
              </Link>
            </div>
            <div className="job-des px-10 grid gap-3 py-2">
              <div className="job-title">
                <h3 className="text-xl">Digital Marketer</h3>
              </div>
              <div className="job-details flex text-gray-500 gap-15">
                <span>Creative Agency</span>
                <span className=" inline-flex">
                  <IoLocationOutline />
                  Athens, Greece
                </span>
                <span>$3500 - $4000</span>
              </div>
            </div>
            <div className="job-apply grid gap-2 p-2">
              <div className="job-btn">
                <button className="border border-[#8b92dd] text-[#8b92dd] py-1 px-4 rounded-2xl hover:bg-[#8b92dd] hover:text-white">Full Time</button>
              </div>
              <div className="job-time">
                <span>7 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
