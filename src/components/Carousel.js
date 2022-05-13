import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "../styles/Home.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="bg-img-c"
          src={require("../assets/IMG_7143.jpg")}
          alt="First slide"
        />
        <Carousel.Caption className="flex h-full justify-center items-center">
          <h1 className="text-[#fff] text-left text-3xl md:text-4xl tb:text-6xl font-bold">
            Welcome to <br />
            UHS Key Club
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="bg-img-c"
          src={require("../assets/homebg2.png")}
          alt="Second slide"
        />
        <Carousel.Caption className="flex h-full justify-center items-center">
          <h1 className="text-[#fff] text-left text-3xl md:text-4xl tb:text-6xl font-bold">
            Committed to Serve
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="bg-img-c"
          src={require("../assets/IMG_7143.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption className="flex h-full justify-center items-center">
          <h1 className="text-[#fff] text-left text-3xl md:text-4xl tb:text-6xl font-bold">
            Division 14
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
