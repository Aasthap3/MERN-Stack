import React from "react";
import { MdContentPasteSearch } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";

const HowApply = () => {
  return (
    <>
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
    </>
  );
};

export default HowApply;
