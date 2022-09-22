
import Jan22 from "../components/NewsletterPDFs/KeyClubJan2022.pdf"
import Dec21 from "../components/NewsletterPDFs/Nov2021.pdf"
import Aug21 from "../components/NewsletterPDFs/Aug2021.pdf"
import React, { Component } from "react";

class Newsletters extends Component {
  render() {
    return (
      <div className="App">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl text-center w-full font-bold mb-7">
            Recent Newsletters
          </h1>
          <div className="flex w-full flex-col lg:flex-row justify-around text-center">
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-xl ">Jan-Feb 2022</h3>
              <a href={Jan22} target="_blank">
                <img src={require("../assets/article1.png")} className="h-64" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Nov-Dec 2021</h3>
              <a href={Dec21} target="_blank">
                <img src={require("../assets/article2.png")} className="h-64" />
              </a>
            </div>
            <div className="flex flex-col items-center justify-center hidden tb:block ">
              <h3 className="text-xl">Aug-Sep 2021</h3>
              <a href={Aug21} target="_blank">
                <img src={require("../assets/article3.png")} className="h-64" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletters;



  // <h1 className="mt-4">Newsletters</h1>
  //       <div className="tb:w-[80%] lg:w-[100%] pb-16 mt-2 py-4 px-8 w-full">
  //         <div className="w-full">
  //           <div className="flex w-full flex-col lg:flex-row justify-around text-center">
  //             <div className="flex flex-col items-center mb-4">
  //               <h3 className="text-xl">Jan-Feb 2022</h3>
  //               <img src={require("../assets/article1.png")} className="h-64" />
  //             </div>
  //             <div className="flex flex-col items-center">
  //               <h3 className="text-xl">Nov-Dec 2021</h3>
  //               <img src={require("../assets/article2.png")} className="h-64" />
  //             </div>
  //             <div className="flex flex-col items-center justify-center ">
  //               <h3 className="text-xl">Aug-Sep 2021</h3>
  //               <img src={require("../assets/article3.png")} className="h-64" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
