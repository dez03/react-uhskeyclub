import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ border: "none", height: "100%", overflow: "hidden" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
