import React from "react";
import photo from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light w-100 h-100 pt-5">
        <div className="container text-center">
          <img
            src={photo}
            alt="photo"
            id="profile"
            className="object-fit-cover rounded-circle border border-2 p-1"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div className="container p-5">
          <ul className=" list-unstyled d-grid gap-2 fs-5">
            <li>
              <Link to="/" className="text-light text-decoration-none">
                <i className="bi bi-house"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-light text-decoration-none">
                <i className="bi bi-person"></i> About
              </Link>
            </li>
            <li>
              <Link to="/education" className="text-light text-decoration-none">
                <i className="bi bi-mortarboard"></i> Education
              </Link>
            </li>
            <li>
              <Link to="/certifications" className="text-light text-decoration-none">
                <i className="bi bi-patch-check"></i> Certifications
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-light text-decoration-none">
                <i className="bi bi-person-gear"></i> Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-light text-decoration-none">
                <i className="bi bi-telephone"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
