import React from 'react'
import '../styles/Home.css'
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

const Home = () => {
  return (
    <>
      <div className="bg-[#F8F0E3]">
        <div className="h-60 md:h-80 bg-img flex justify-center items-center">
          <h1 className="text-[#fff] text-4xl md:text-5xl py-2 font-bold">
            Welcome to <br />
            UHS Key Club
          </h1>
        </div>

        <div className="buttons3-container flex flex-col items-center">
          {/* <Link src='/Home.js'> */}
          <div className="hoursBtn Btn3 py-2 h-[110px] w-[212px] md:w-[250px] md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center my-[1.3em] text-lg flex-col">
            <FiIcons.FiClock className="text-[55px] md:text-[65px]" />
            <h3 className="md:text-2xl md:mt-2">Hours</h3>
          </div>
          {/* </Link> */}
          <div className="calendarBtn Btn3 h-[110px] w-[212px] md:w-[250px] md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center mb-[1.3em] text-lg flex-col">
            <FaIcons.FaRegCalendarAlt className="text-[55px] md:text-[65px]" />
            <h3 className="md:text-2xl md:mt-2">Calendar</h3>
          </div>
          <div className="galleryBtn Btn3 h-[110px] w-[212px] md:w-[250px] md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center mb-[1.3em] text-lg flex-col">
            <GrIcons.GrGallery className="text-[55px] md:text-[65px]" />
            <h3 className="md:text-2xl md:mt-2">Gallery</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col h-full items-center">
          <div className="w-[80%] mission-container py-4 px-8 mb-2 ">
            <h1 className="text-3xl text-center w-full font-bold mb-2">
              Our Mission
            </h1>
            <p className="text-base text-left font-normal">
              Key Club is a student-led, high school organization. Our members
              make the world a better place through service. In doing so, we
              grow as individuals and as leaders by answering the call to lead,
              summoning the courage to engage and developing the heart to serve.
              Union High School is apart of New Jersey Key Club District 15.
            </p>
            <button className="btn btn-primary ">Read More</button>
          </div>

          <div className="fact-container w-[80%] py-4 px-8 my-2 px-0">
            <h1 className="text-3xl text-center w-full font-bold mb-2">
              Total Hours
            </h1>
            <em>
              <h4 className="text-lg">2021-Present</h4>
            </em>
            <h4 className="text-xl">Officers- 240.5 Hrs</h4>
            <h4 className="text-xl">Seniors- 222 Hrs</h4>
            <h4 className="text-xl">Juniors- 306.5 Hrs</h4>
            <h4 className="text-xl">Sophmores- 165.5 Hrs</h4>
            <h4 className="text-xl">Freshman- 201 Hrs</h4>
            <button className="btn btn-primary mt-2">More Hours</button>
          </div>
        </div>

        <div className="w-[80%] article-container mb-8 mt-2 py-4 px-8 text-[#fff]">
          <div className="w-full">
            <h1>Recent Newsletters</h1>
            <div className="flex w-full flex-col justify-around text-center">
              <div className="flex-col justify-center text-center">
                <div className="flex flex-col items-center">
                  <h3>Jan-Feb 2022</h3>
                  <img
                    src={require("../assets/article1.png")}
                    className="h-64"
                  />
                </div>
              </div>
              <div className="flex-col justify-center text-center">
                <div className="flex flex-col items-center">
                  <h3>Jan-Feb 2022</h3>
                  <img
                    src={require("../assets/article1.png")}
                    className="h-64"
                  />
                </div>
              </div>
              <div className="flex-col justify-center text-center">
                <div className="flex flex-col items-center">
                  <h3>Nov-Dec 2021</h3>
                  <img
                    src={require("../assets/article2.png")}
                    className="h-64"
                  />
                </div>
              </div>
            </div>
            <h1 className="btn btn-primary my-4">See All Newsletters</h1>
          </div>
        </div>
      </div>
    </>
  );
}

/* Once recent articles are updated, must delete old article images ZOOM OUT TO 49% FOR THE SCREENSHOT!!!!!! FOR PDF's */
 
export default Home