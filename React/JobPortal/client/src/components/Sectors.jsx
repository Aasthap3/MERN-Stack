import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbWriting } from "react-icons/tb";

const Sectors = () => {
  return (
    <>
      <div className="mt-50 mx-45">
        <div className="headings text-center grid gap-6 mb-25">
          <h5 className="text-pink-500 text-[1.1rem]">
            FEATURED TOUR PACKAGES
          </h5>
          <h1 className="font-mulish text-5xl">Browse Top Categories</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="card border border-[#dafcef] w-[16vw] px-5 py-10 m-5 hover:text-pink-600 hover:shadow-xl">
            <div className="sector-icon flex justify-center py-5">
              <FaUserGraduate className="text-5xl" />
            </div>
            <div className="sector-cap text-center">
              <h5>Design & Creative</h5>
              <p className="text-pink-500">(653)</p>
            </div>
          </div>
          <div className="card border border-[#dafcef] w-[16vw] px-5 py-10 m-5 hover:text-pink-600 hover:shadow-xl">
            <div className="sector-icon flex justify-center py-5">
              <MdOutlineDesignServices className="text-5xl" />
            </div>
            <div className="sector-cap text-center">
              <h5>Design & Development</h5>
              <p className="text-pink-500">(653)</p>
            </div>
          </div>
          <div className="card border border-[#dafcef] w-[16vw] px-5 py-10 m-5 hover:text-pink-600 hover:shadow-xl">
            <div className="sector-icon flex justify-center py-5">
              <IoBagHandle className="text-5xl" />
            </div>
            <div className="sector-cap text-center">
              <h5>Sales & Marketing</h5>
              <p className="text-pink-500">(653)</p>
            </div>
          </div>
          <div className="card border border-[#dafcef] w-[16vw] px-5 py-10 m-5 hover:text-pink-600 hover:shadow-xl">
            <div className="sector-icon flex justify-center py-5">
              <FaMobileScreenButton className="text-5xl" />
            </div>
            <div className="sector-cap text-center">
              <h5>Mobile Applications</h5>
              <p className="text-pink-500">(653)</p>
            </div>
          </div>
          <div className="card border border-[#dafcef] w-[16vw] px-5 py-10 m-5 hover:text-pink-600 hover:shadow-xl">
            <div className="sector-icon flex justify-center py-5">
              <LuConstruction className="text-5xl" />
            </div>
            <div className="sector-cap text-center">
              <h5>Construction</h5>
              <p className="text-pink-500">(653)</p>
            </div>
          </div>
          <div className="card border border-[#dafcef] w-[16vw] px-5 py-10 m-5 hover:text-pink-600 hover:shadow-xl">
            <div className="sector-icon flex justify-center py-5">
              <GrTechnology className="text-5xl" />
            </div>
            <div className="sector-cap text-center">
              <h5>Information Technology</h5>
              <p className="text-pink-500">(653)</p>
            </div>
          </div>
          <div className="card border border-[#dafcef] w-[16vw] px-5 py-10 m-5 hover:text-pink-600 hover:shadow-xl">
            <div className="sector-icon flex justify-center py-5">
              <MdOutlineRealEstateAgent className="text-5xl" />
            </div>
            <div className="sector-cap text-center">
              <h5>Real Estate</h5>
              <p className="text-pink-500">(653)</p>
            </div>
          </div>
          <div className="card border border-[#dafcef] w-[16vw] px-5 py-10 m-5 hover:text-pink-600 hover:shadow-xl">
            <div className="sector-icon flex justify-center py-5">
              <TbWriting className="text-5xl" />
            </div>
            <div className="sector-cap text-center">
              <h5>Content Writer</h5>
              <p className="text-pink-500">(653)</p>
            </div>
          </div>
        </div>
        <div className="flex my-30 justify-center">
            <button className="border border-[#8b92dd] text-[#8b92dd] py-5 px-15 hover:bg-[#8b92dd] hover:text-white">BROWSE ALL SECTORS</button>
        </div>
      </div>
    </>
  );
};

export default Sectors;
