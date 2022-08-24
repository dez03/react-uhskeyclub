import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Bg1 from "../assets/homebg1.jpg";
import Bg2 from "../assets/homebg2.jpg";
import Bg3 from "../assets/homebg3.jpg";
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
          src={Bg1}
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
          src={Bg2}
          alt="Second slide"
        />
        <Carousel.Caption className="flex h-full justify-center items-center">
          <h1 className="text-[#fff]  text-3xl md:text-4xl tb:text-6xl font-bold">
            Committed to Serve
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="bg-img-c"
          src={Bg3}
          alt="Third slide"
        />
        <Carousel.Caption className="flex h-full justify-center items-center">
          <h1 className="text-[#fff] text-3xl md:text-4xl tb:text-6xl font-bold">
            Division 14
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
