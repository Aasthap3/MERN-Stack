import React from "react";
import Hero from "../components/Hero";
import Sectors from "../components/Sectors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadCV from "../components/UploadCV";
import JobList from "../components/JobList";

const Home = () => {
  return (
    <>
      <Hero/>
      <Sectors/>
      <UploadCV/>
      <JobList/>
    </>
  );
};

export default Home;
