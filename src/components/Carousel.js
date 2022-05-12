import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "../styles/Home.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="w-100 h-60 md:h-80 bg-img flex justify-center items-center"
          src={require("../assets/IMG_7143.jpg")}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <div className=" flex justify-center items-center">
          <h1 className="text-[#fff] text-left text-4xl md:text-5xl py-2 welcome font-bold">
            Welcome to <br />
            UHS Key Club
          </h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-60 md:h-80 w-100 bg-img flex justify-center items-center"
          src={require("../assets/homebg2.png")}
          alt="Second slide"
        />

        <div className=" flex justify-center items-center">
          <h1 className="text-[#fff] text-4xl md:text-5xl py-2 welcome font-bold">
            District 14
          </h1>
        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" d-block w-100 h-60 md:h-80 bg-img flex justify-center items-center"
          src={require("../assets/IMG_7143.jpg")}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
