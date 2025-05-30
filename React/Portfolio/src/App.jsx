import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Home from "./components/Home";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main id="main">
        <section id="sidebar">
          <Sidebar />
        </section>
        <section id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certification />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
