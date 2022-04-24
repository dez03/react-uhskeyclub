import React from 'react'
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

const Home = () => {
  return (
    <div className="bg-[#F8F0E3]">
      <div className="h-60 md:h-80 bg-[#ff0000] bg-img flex justify-center items-center">
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
  );
}
 
export default Home