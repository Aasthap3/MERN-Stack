import React from "react";
import photo from "../assets/Photo.jpg";
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
        <div className="container">
            <ul className=" list-unstyled">
                <li>
                    <Link to="/"><i class="bi bi-house"></i>Home</Link>
                </li>
                <li>
                    <Link to="/about"><i class="bi bi-person"></i>About</Link>
                </li>
                <li>
                    <Link to="/education"><i class="bi bi-mortarboard"></i>Education</Link>
                </li>
                <li>
                    <Link to="/certification"><i class="bi bi-patch-check"></i>Certifications</Link>
                </li>
                <li>
                    <Link to="/projects"><i class="bi bi-person-gear"></i>Home</Link>
                </li>
                <li>
                    <Link to="/contact"><i class="bi bi-telephone"></i>Home</Link>
                </li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
