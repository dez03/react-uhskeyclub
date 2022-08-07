import React from 'react'
import SeniorNames from "../components/SeniorNames"
import JuniorNames from "../components/JuniorNames";
import SophomoreNames from "../components/SophomoreNames";
import FreshmanNames from "../components/FreshmanNames";
import Friends from "../assets/friends.svg";

const Members = () => {
  return (
    <div className="flex flex-col m-0 items-center justify-center">
      <h1 className="text-5xl mt-4">2022-2023 Members </h1>
      <img src={Friends} className="h-60 my-5" />
      <h4 className="mx-3 mb-5">
        You are the primary aspect of UHS Key Club. Your name will appear here
        as a valuable member of the 2022–2023 Union Key Club. Bravo for your
        excellent service.
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
  );
}

export default Members