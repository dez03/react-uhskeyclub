import React from 'react'
import * as AiIcons from "react-icons/ai";
import "../App.css";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-4 fs-5 z-10"
      id="navbar"
    >
      <div className="container-fluid  ">
        <NavLink className="navbar-brand" to="/">
          <AiIcons.AiFillHome className="text-3xl xl:hidden" />
        </NavLink>
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/calendar">
                Calendar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/districtproject">
                District Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hours">
                Hours
              </NavLink>
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
                {/* <li>
                  <NavLink className="dropdown-item" to="/mission">
                    Our Mission
                  </NavLink>
                </li> */}
                <li>
                  <NavLink className="dropdown-item" to="/advisors">
                    Advisors
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    22-23 Officers
                  </a>
                </li>
                <li>
                  <NavLink className=" dropdown-item" to="/members">
                    22-23 Members
                  </NavLink>
                </li>
                <li>
                  {/* <NavLink className=" dropdown-item" to="/dues">
                    How to Pay Dues
                  </NavLink> */}
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/faq">
                    FAQ
                  </NavLink>
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
                  <NavLink className="dropdown-item" to="/newsletters">
                    Newsletters
                  </NavLink>
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
