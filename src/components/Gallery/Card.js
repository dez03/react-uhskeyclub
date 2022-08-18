import { useState, React} from "react";
import "./SearchStyles.css";

function Card({ person }) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
    <div className="overhead">
      <div className="containeryaherd">
        <img
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          alt={person.eventName}
          src={person.imgPath}
          className="navi"
        />
        {isHovering && (
          <div
            className="infoi"
          >
            <h2>{person.eventName}</h2>
            <p>{person.date}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
