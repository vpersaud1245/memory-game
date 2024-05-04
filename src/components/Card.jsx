/* eslint-disable react/prop-types */
import "../styles/card.css";
import cardCover from "../assets/images/card-background.jpg";
export default function Card({ cardInfo, onClick }) {
  return (
    <button
      className="card"
      onClick={onClick}
      style={{
        backgroundImage: `url(${cardInfo.src})`,
      }}
    >
      <img src={cardCover} alt="" className="card__cover" />
      <div className="characterName">{cardInfo.name}</div>
    </button>
  );
}

/**FIGURING OUT HOW TO STYLE CARDS */
