import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
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
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
