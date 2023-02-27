// import React, { useState, useEffect } from "react";

// const Popup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const popupShown = sessionStorage.getItem("popupShown");
//     if (!popupShown) {
//       setShowPopup(true);
//       sessionStorage.setItem("popupShown", true);
//     }
//   }, []);

//   const handleClose = () => {
//     setShowPopup(false);
//   };

import React, { useState, useEffect } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const dontShow = localStorage.getItem("dontShowAgain");
    if (dontShow) {
      setDontShowAgain(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleDontShowAgain = () => {
    setDontShowAgain(true);
    localStorage.setItem("dontShowAgain", true);
  };

  return (
    <>
      {!dontShowAgain && showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="absolute bg-white rounded-lg shadow-xl w-3/4 lg:w-2/4 p-8">
            <h1 className="text-xl lg:text-center text-left ">
              Important Info!
            </h1>
            <hr></hr>
            <p className="text-lg text-left ">
              The search your name gallery allows you to input your name to only
              find the pictures you're in! If you are just visiting this site
              and are not a member of UHS key club but want to try this feature
              out, check out{" "}
              <a href="https://uhskeyclub.vercel.app/members">22-23 Members</a>{" "}
              for some names to play around with. Keep in mind not all names are
              here.
            </p>
            <br></br> <br></br>
            <button
              className="absolute border rounded-md bottom-0 right-0 m-4 p-2 "
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="absolute border rounded-md p-2 bottom-0 left-0 m-4 mt-12 "
              onClick={handleDontShowAgain}
            >
              Don't show again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
