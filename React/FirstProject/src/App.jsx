import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import About from "./components/About";
import Education from "./Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App(){
  return(
    <>
    <Navbar/>
    <About/>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App;