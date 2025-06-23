import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {Toaster} from "react-hot-toast";
import UserDashboard from "./pages/dashboards/UserDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import RecruiterDashboard from "./pages/dashboards/RecruiterDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster/>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/userDashboard" element={<UserDashboard/>}/>
            <Route path="/recruiterDashboard" element={<RecruiterDashboard/>}/>
            <Route path="/adminDashboard" element={<AdminDashboard/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
