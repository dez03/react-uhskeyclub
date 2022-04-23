import React from 'react'
import * as AiIcons from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4">
      <div className="container-fluid  ">
        <a className="navbar-brand" href="index.html">
          <AiIcons.AiFillHome className="d-inline-block align-text-top home-icon" />
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                District Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hours
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Information
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Advisors
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    22-23 Officers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    22-23 Members
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    How to Join
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    How to Pay Dues
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Featured
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    service project?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Partners?
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;