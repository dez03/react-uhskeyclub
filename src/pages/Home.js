import React from 'react'
import '../styles/Home.css'
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import ControlledCarousel from "../components/Carousel";
import { NavLink } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <>
      <div className="butsobig-cont">
        <div className="butsobig">
          <ControlledCarousel></ControlledCarousel>
          <div className="bg-[#F8F0E3]">
            <div className="buttons3-container my-8 tb:my-16 flex flex-col items-center px-[10%]">
              {/* <Link src='/Home.js'> */}
              <NavLink
                to="/hours"
                className="no-underline text-[#000] hover:text-[#000]   hoursBtn Btn3 py-2 h-[110px] w-[212px] md:w-full md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center my-[1.3em] text-lg flex-col"
              >
                <FiIcons.FiClock className="text-[55px] md:text-[65px]" />
                <h3 className="md:text-2xl md:mt-2">Hours</h3>
              </NavLink>
              {/* </Link> */}
              <NavLink
                to="/calendar"
                className="no-underline text-[#000] hover:text-[#000] calendarBtn Btn3 h-[110px] w-[212px] md:w-full md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center mb-[1.3em] text-lg flex-col"
              >
                <FaIcons.FaRegCalendarAlt className="text-[55px] md:text-[65px]" />
                <h3 className="md:text-2xl md:mt-2">Calendar</h3>
              </NavLink>
              <NavLink
                to="/gallery"
                className="no-underline text-[#000] hover:text-[#000] galleryBtn Btn3 h-[110px] w-[212px] md:w-full md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center mb-[1.3em] text-lg flex-col"
              >
                <GrIcons.GrGallery className="text-[55px] md:text-[65px]" />
                <h3 className="md:text-2xl md:mt-2">Gallery</h3>
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col xl:flex-row min-h-96 w-full justify-center items-end tb:items-center xl:px-[10%]">
              <div
                /* className="xl:mr-2 h-full mission-container w-full tb:w-[80%] p-8 pt-4 my-2" */ className="h-96 w-full tb:w-[80%] xl:mr-2 py-4 px-8 my-2 px-0 fact-container flex flex-col justify-center"
              >
                <h1 className="text-2xl md:text-4xl text-center w-full font-bold mb-2">
                  Who We Are
                </h1>
                <p className="text-base md:text-xl text-center mx-4 xl:text-lg">
                  Union High School Key Club is a student-led, high school
                  organization. Our members make the world a better place
                  through service. In doing so, we grow as individuals and as
                  leaders by answering the call to lead, summoning the courage
                  to engage and developing the heart to serve. Union High School
                  is apart of New Jersey Key Club Division 14.
                </p>
                {/* <NavLink aria-current="page" to="/mission">
                  <button className="btn btn-primary">Read More</button>
                </NavLink> */}
              </div>

              <div className="fact-container h-96 w-full tb:w-[80%] xl:ml-2 py-4 px-8 my-2 px-0 flex flex-col justify-center">
                <h1 className="text-2xl md:text-4xl text-center w-full font-bold ">
                  Total Hours
                </h1>
                <em>
                  <h4 className="text-base">2021-Present</h4>
                </em>
                <h4 className="text-xl font-normal">
                  <strong>Officers- </strong>170.5 Hours
                </h4>
                <h4 className="text-xl font-normal">
                  <strong>Seniors- </strong> 203 Hours
                </h4>
                <h4 className="text-xl font-normal">
                  <strong>Juniors-</strong> 127 Hours
                </h4>
                <h4 className="text-xl font-normal">
                  <strong>Sophmores- </strong>198.5 Hours
                </h4>
                <h4 className="text-xl font-normal">
                  {" "}
                  <strong>Freshman- </strong>No Data
                </h4>
                <NavLink aria-current="page" to="/hours">
                  <button className="btn btn-primary">More Hours</button>
                </NavLink>
              </div>
            </div>

            <div className="tb:w-[80%] article-container mb-16 mt-2 py-4 px-8 w-full text-[#fff]">
              <div className="w-full">
                <h1 className="text-2xl md:text-4xl text-center w-full font-bold mb-7">
                  Recent Newsletters
                </h1>
                <div className="flex w-full flex-col lg:flex-row justify-around text-center">
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="text-xl">Jan-Feb 2022</h3>
                    <img
                      src={require("../assets/article1.png")}
                      className="h-64"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl">Nov-Dec 2021</h3>
                    <img
                      src={require("../assets/article2.png")}
                      className="h-64"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center hidden tb:block ">
                    <h3 className="text-xl">Aug-Sep 2021</h3>
                    <img
                      src={require("../assets/article3.png")}
                      className="h-64"
                    />
                  </div>
                </div>
                <NavLink className="nav-link" to="/newsletters">
                  <h1 className="btn btn-primary mt-4">See All Newsletters</h1>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Once recent articles are updated, must delete old article images ZOOM OUT TO 49% FOR THE SCREENSHOT!!!!!! FOR PDF's */
 
export default Home