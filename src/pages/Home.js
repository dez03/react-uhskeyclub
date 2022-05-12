import React from 'react'
import '../styles/Home.css'
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import ControlledCarousel from "../components/Carousel";


function Home() {
  return (
    <>
      <div className="bg-[#F8F0E3]">
        {/* <div className="h-60 md:h-80 bg-img flex justify-center items-center">
          <h1 className="text-[#fff] text-4xl md:text-5xl py-2 font-bold">
            Welcome to <br />
            UHS Key Club
          </h1>
        </div> */}

        <ControlledCarousel></ControlledCarousel>

        <div className="buttons3-container my-16 flex flex-col items-center px-[10%]">
          {/* <Link src='/Home.js'> */}
          <div className="hoursBtn Btn3 py-2 h-[110px] w-[212px] md:w-full md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center my-[1.3em] text-lg flex-col">
            <FiIcons.FiClock className="text-[55px] md:text-[65px]" />
            <h3 className="md:text-2xl md:mt-2">Hours</h3>
          </div>
          {/* </Link> */}
          <div className="calendarBtn Btn3 h-[110px] w-[212px] md:w-full md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center mb-[1.3em] text-lg flex-col">
            <FaIcons.FaRegCalendarAlt className="text-[55px] md:text-[65px]" />
            <h3 className="md:text-2xl md:mt-2">Calendar</h3>
          </div>
          <div className="galleryBtn Btn3 h-[110px] w-[212px] md:w-full md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center mb-[1.3em] text-lg flex-col">
            <GrIcons.GrGallery className="text-[55px] md:text-[65px]" />
            <h3 className="md:text-2xl md:mt-2">Gallery</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col xl:flex-row min-h-86 w-full justify-center items-end xl:px-[10%]">
          <div className="xl:mr-2 h-full mission-container w-full p-8 mb-2">
            <h1 className="text-3xl text-center w-full font-bold mb-2">
              Who We Are
            </h1>
            <p className="text-lg text-left font-normal">
              Key Club is a student-led, high school organization. Our members
              make the world a better place through service. In doing so, we
              grow as individuals and as leaders by answering the call to lead,
              summoning the courage to engage and developing the heart to serve.
              Union High School is apart of New Jersey Key Club District 14.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>

          <div className="fact-container h-full w-full xl:ml-2 py-4 px-8 my-2 px-0">
            <h1 className="text-3xl text-center w-full font-bold ">
              Total Hours
            </h1>
            <em>
              <h4 className="text-base">2021-Present</h4>
            </em>
            <h4 className="text-xl">Officers- 240.5 Hrs</h4>
            <h4 className="text-xl">Seniors- 222 Hrs</h4>
            <h4 className="text-xl">Juniors- 306.5 Hrs</h4>
            <h4 className="text-xl">Sophmores- 165.5 Hrs</h4>
            <h4 className="text-xl">Freshman- 201 Hrs</h4>
            <button className="btn btn-primary">More Hours</button>
          </div>
        </div>

        <div className="tb:w-[80%] article-container mb-8 mt-2 py-4 px-8 sm:w-full text-[#fff]">
          <div className="w-full">
            <h1 className="text-3xl text-center w-full font-bold mb-7">
              Recent Newsletters
            </h1>
            <div className="flex w-full flex-col lg:flex-row justify-around text-center">
              <div className="flex flex-col items-center mb-4">
                <h3 className="text-xl">Jan-Feb 2022</h3>
                <img src={require("../assets/article1.png")} className="h-64" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl">Nov-Dec 2021</h3>
                <img src={require("../assets/article2.png")} className="h-64" />
              </div>
              <div className="flex flex-col items-center hidden tb:block">
                <h3 className="text-xl">Aug-Sep 2021</h3>
                <img src={require("../assets/article3.png")} className="h-64" />
              </div>
            </div>
            <h1 className="btn btn-primary mt-4">See All Newsletters</h1>
          </div>
        </div>
      </div>
    </>
  );
}

/* Once recent articles are updated, must delete old article images ZOOM OUT TO 49% FOR THE SCREENSHOT!!!!!! FOR PDF's */
 
export default Home