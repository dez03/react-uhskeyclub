import React from 'react'
import uhsseal from '../assets/uhsseal.png';

const TopNav = () => {
  return (
    <div className="h-[90px] bg-[#3F0B0A] pl-1 sm:pl-2 md:h-[100px] lg:h-[130px] ">
      <div className="flex items-center justify-left w-full h-[90px] md:h-[100px] lg:h-[130px]">
        <img
          src={require("../assets/uhsseal.png")}
          className=" h-[70px] sm:h-[80px] md:h-[1=800px] lg:h-[110px] lg:px-4"
        />
        <div className="flex flex-col items-start px-1 md:px-2  ">
          <h1 className="text-[#EFD071] font-bold text-[18px] sm:uppercase md:text-[20px] lg:text-[36px]">
            Union High School Key Club
          </h1>
          <h3 className="text-[15px] text-[#fff] font-bold md:text-[18px] lg:text-[28px]">
            We care about our community.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TopNav;