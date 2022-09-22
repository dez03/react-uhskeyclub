import React from 'react'
import Person from "../assets/person.svg"
import Education from "../assets/educationday.png";
import BookFair from "../assets/bookfair.png";
import { NavLink } from "react-router-dom";

function DistrictProject() {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:mx-12">
        <h1 className="text-5xl mt-4">Education is the Key</h1>
        <img src={Person} className="h-32 my-5" />
        <p className="m-6 text-xl text-center max-w-[1000px]">
          For the 2022-2023 Service Year, our District Project is{" "}
          <strong>Education is the Key. </strong>
          By focusing on education within the state of New Jersey, we can
          contribute together to lowering the learning gap created by the
          pandemic. Union High School Key Club, along with the other clubs in
          the district, have made improving access to quality education one of
          their prime goals. Below are some of the district project service
          events we have done.
        </p>

        <div className="m-8 flex flex-col lg:flex-row ">
          <div className="lg:mr-8">
            <img src={Education} className="h-64 w-80 object-cover" />
            <p>
              National Public Education Poster Day- <br /> 7/29/22{" "}
            </p>
          </div>
          <div>
            <img src={BookFair} className="h-64 w-80 object-cover" />
            <p className="m-0">
              Burnet Middle School Book Fair- <br /> 5/24/22{" "}
            </p>
          </div>
        </div>
        <NavLink className="no" to="/gallery">
          <button className="btn btn-primary mb-20 ">More Photos</button>
        </NavLink>
      </div>
    </>
  );
}

export default DistrictProject