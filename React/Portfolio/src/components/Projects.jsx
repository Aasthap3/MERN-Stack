import React from 'react'

const Projects = () => {
  return (
    <>
    <div id="project" className="m-4 p-5 rounded bg-light">
        <h2 className="text-bg-dark p-2 rounded">Projects</h2>
        <ul className="list-unstyled d-grid gap-5">
          <li className="list-item"> 
            <p>
              <strong>Cupid’s Crew</strong>
              <span>
                <i> (FullStack Wedding Planner Web Application)</i>
              </span>
            </p>
            <p>
              <i>Tech Stack: HTML, CSS, JavaScript, PHP, MySQL</i>
            </p>
            <ul>
              <li>
                {" "}
                Developed a fullstack responsive Online Wedding Planner website
                with a modern UI.
              </li>
              <li>
                {" "}
                Focused on user experience (UX) and mobile optimization to
                ensure a seamless experience across devices.
              </li>
              <li>
                {" "}
                Integrated features like online booking, customer inquiry forms,
                and vendor management dashboards.
              </li>
            </ul>
          </li>
          <li className="list-item">
            <p>
              <strong>Student Attendance System</strong>
              <span>
                <i> (Full Stack Web Application)</i>
              </span>
            </p>
            <p>
              <i>Tech Stack: HTML, CSS, JavaScript, PHP, MySQL</i>
            </p>
            <ul>
              <li>
                {" "}
                Designed and developed a full-stack Attendance Management
                System for students, enabling real-time tracking, record
                management, and report generation.
              </li>
              <li>
                {" "}
                Implemented features like role-based authentication (admin,
                faculty, student), automated attendance reports, and error
                handling.
              </li>
              <li>
                {" "}
                Focused on clean UI/UX design, database optimization, and full
                CRUD operations (Create, Read, Update, Delete)
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Projects