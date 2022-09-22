import React from 'react'
import SeniorNames from "../components/SeniorNames"
import JuniorNames from "../components/JuniorNames";
import SophomoreNames from "../components/SophomoreNames";
import FreshmanNames from "../components/FreshmanNames";
import Friends from "../assets/friends.svg";
import Sidebar from "../components/MembersSidebar"

const Members = () => {
  return (
    <>
      {/* <div className='relative'>
        <Sidebar className="absolute right-0 bottom-0 w-10 " />
      </div> */}
      <div className="flex flex-col m-0 items-center justify-center ">
        <h1 className="text-5xl mt-4">2022-2023 Members </h1>
        <img src={Friends} className="h-60 my-5" />
        <h4 className="mx-3 mb-3 lg:w-2/4">
          You are the primary aspect of UHS Key Club. Your name will appear here
          as a valuable member of the 2022–2023 Union Key Club. Bravo for your
          excellent service. <br />{" "}
          <span className="text-sm">
            If you're name is missing, please email&nbsp;
            <a
              href="mailto:aviel.hernandez@twpunionschools.org"
              className="no-underline hover:text-[#000] text-[#000] text-[#000]"
            >
              aviel.hernandez@twpunionschools.org
            </a>
          </span>
        </h4>

        <h1>Seniors</h1>
        <h3>Class of 2023</h3>
        <SeniorNames />

        <h1>Juniors</h1>
        <h3>Class of 2024</h3>
        <JuniorNames />

        <h1>Sophomores</h1>
        <h3>Class of 2025</h3>
        <SophomoreNames />
        <h1>Freshmen</h1>
        <h3>Class of 2026</h3>
        <FreshmanNames />
      </div>
    </>
  );
}

export default Members