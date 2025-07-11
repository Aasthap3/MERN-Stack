import React from "react";
import { MdContentPasteSearch } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";

const About = () => {
  return (
    <>
      <div className='bg-[rgba(78,87,158,0.8)] bg-[url("../about.jpg")] bg-center bg-blend-multiply px-90 h-[60vh] flex justify-center items-center'>
        <h1 className="font-mulish text-5xl  text-white">ABOUT US</h1>
      </div>
      {/* How Apply Component */}
      <div className="bg-[url('./how-applybg.png')] my-50 px-45">
        <div className="headings text-center grid gap-6 pt-30 mb-25">
          <h5 className="text-pink-600 text-[1.1rem]">APPLY PROCESS</h5>
          <h1 className="font-mulish text-white text-5xl">How it works?</h1>
        </div>
        <div className="how-apply text-white flex pb-30">
          <div className="steps bg-[#26317f] w-[25vw] px-15 py-15 grid gap-5 mx-3.5">
            <div className="icons grid mx-auto">
              <MdContentPasteSearch className="text-6xl" />
            </div>
            <div className="title text-center">
              <h3 className="text-xl font-bold">1. Search a job</h3>
            </div>
            <div className="txt text-[#a5aaca] text-center">
              <p>
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </p>
            </div>
          </div>
          <div className="steps bg-[#26317f] w-[25vw] px-15 py-15 grid gap-5 mx-3.5">
            <div className="icons grid mx-auto">
              <FaUserGraduate className="text-6xl" />
            </div>
            <div className="title text-center">
              <h3 className="text-xl font-bold">2. Apply for job</h3>
            </div>
            <div className="txt text-[#a5aaca] text-center">
              <p>
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </p>
            </div>
          </div>
          <div className="steps bg-[#26317f] w-[25vw] px-15 py-15 grid gap-5 mx-3.5">
            <div className="icons grid mx-auto">
              <GrCompliance className="text-6xl" />
            </div>
            <div className="title text-center">
              <h3 className="text-xl font-bold">3. Get your job</h3>
            </div>
            <div className="txt text-[#a5aaca] text-center">
              <p>
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Upload CV Component */}
      <div className='bg-[rgba(110,120,185,0.8)] bg-[url("../cv_bg.jpg")] bg-center bg-cover bg-no-repeat bg-blend-multiply my-50 px-90'>
        <div className="headings text-center text-white grid gap-6 pt-35">
          <h5 className="text-[1.1rem]">
            FEATURED TOUR PACKAGES
          </h5>
          <h1 className="font-mulish text-5xl">Make a Difference with Your Online Resume!</h1>
        </div>
        <div className="btn flex pt-10 pb-35 justify-center">
            <button className="border border-white rounded-sm text-white py-5 px-15">Upload your cv</button>
        </div>
    </div>
    </>
  );
};

export default About;
