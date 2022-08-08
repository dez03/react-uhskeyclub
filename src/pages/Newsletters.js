import React from 'react'

const Newsletters = () => {
  return (
    <>
      <h1 className='m-0'>Newsletters</h1>
      <div className="tb:w-[80%] pb-16 mt-2 py-4 px-8 w-full ">
          <div className="w-full">
            
            <div className="flex w-full flex-col lg:flex-row justify-around text-center">
              <div className="flex flex-col items-center mb-4">
                <h3 className="text-xl">Jan-Feb 2022</h3>
                <img src={require("../assets/article1.png")} className="h-64" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl">Nov-Dec 2021</h3>
                <img src={require("../assets/article2.png")} className="h-64" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3 className="text-xl">Aug-Sep 2021</h3>
                <img src={require("../assets/article3.png")} className="h-64" />
              </div>
            </div>
            <h1 className="btn btn-primary mt-4">See All Newsletters</h1>
          </div>
        </div>
    </>
  );
}

export default Newsletters