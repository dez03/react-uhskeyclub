import { useState, React} from "react";
import "./SearchStyles.css";

function Card({ person }) {

  return (
    <div className="overhead">
      <div className="containeryaherd">
        <img
          alt={person.eventName}
          src={person.imgPath}
          className="navi h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        {/* {isHovering && (
          <div
            className="infoi"
          >
            <h2>{person.eventName}</h2>
            <p>{person.date}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Card;
