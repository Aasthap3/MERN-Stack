import React from "react";
import Hero from "../components/Hero";
import Sectors from "../components/Sectors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadCV from "../components/UploadCV";
import JobList from "../components/JobList";
import HowApply from "../components/HowApply";

const Home = () => {
  return (
    <>
      <Hero/>
      <Sectors/>
      <UploadCV/>
      <JobList/>
      <HowApply/>
    </>
  );
};

export default Home;
