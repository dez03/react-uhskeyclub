import React from 'react'
import Search from "../components/Gallery/Search";
import initialDetails from "../data/InitialDetails";

const Gallery = () => {
  return (
    <>
      <h1 className="m-0 ">Gallery</h1>
      <p className="">Press the search button and type your name</p>
      <p>This page is still under development, I am aware it is buggy, the search bar works though!</p>
      <Search details={initialDetails} />
    </>
  );
}

export default Gallery