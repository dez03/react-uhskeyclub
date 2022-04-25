import React from 'react'
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
          <div className="hoursBtn Btn3 py-2 h-[110px] w-[212px] md:w-[250px] md:h-[150px] hover:bg-[#f2f2f2] duration-300 shadow-md rounded-2xl bg-[#fff] flex items-center justify-center my-[1.3em] text-lg flex-col">
            <FiIcons.FiClock className="text-[55px] md:text-[65px]" />
            <h3 className="md:text-2xl md:mt-2">Hours</h3>
          </div>
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

      <div>
        <div>
          <h1>Our Mission</h1>
          <p>
            Key Club is a student-led, high school organization. Our members
            make the world a better place through service. In doing so, we grow
            as individuals and as leaders by answering the call to lead,
            summoning the courage to engage and developing the heart to serve.
            Union High School is apart of New Jersey Key Club District 15.
          </p>
          <button className="btn btn-primary">Read More</button>
        </div>
        <div>
          <h1>Total Hours</h1>
          <em>
            <h4>2021-Present</h4>
          </em>
          <h3>Officers- 240.5 Hrs</h3>
          <h3>Seniors- 222 Hrs</h3>
          <h3>Juniors- 306.5 Hrs</h3>
          <h3>Sophmores- 165.5 Hrs</h3>
          <h3>Freshman- 201 Hrs</h3>
        </div>
        <div>
          <h1>Recent Newsletters</h1>
          <h3>Jan-Feb 2022</h3>
          <img></img>
        </div>
      </div>
    </>
  );
}
 
export default Home