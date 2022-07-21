import React from 'react'
import ProjectImg from "../assets/districtproject.png";




function DistrictProject() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={ProjectImg} className="w-3/5" />
        <p className="m-0 text-xl w-3/5">
          The New Jersey District of Key Club International is proud to announce
          that they have chosen Keeping the Garden State Green as the District
          Project for the 2020-2021 service year. Throughout the world, there
          are numerous environmental crises tremendously impacting the lives of
          millions. It is crucial for humans to protect Earth's ecosystems as
          well as take steps towards sustainable practices, so for this service
          year, Union High School Key Club will be devoting our time and effort
          to the well-being of our planet. Working together, we can greatly
          impact the world! Read the District Project Guide to learn more about
          the District Project and what you can do to help!
        </p>
      </div>
      <button>District Project Guide</button>
    </>
  );
}

export default DistrictProject