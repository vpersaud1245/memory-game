/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "../styles/card.css";
import VanillaTilt from "vanilla-tilt";
export default function Card({ cardInfo, onClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    VanillaTilt.init(cardElement, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

    return () => {
      cardElement.vanillaTilt.destroy();
    };
  }, []);

  return (
    <button ref={cardRef} className="card" onClick={onClick}>
      <div
        className="card__img"
        style={{ backgroundImage: `url(${cardInfo.src})` }}
      ></div>
      <div className="character__name">{cardInfo.name}</div>
    </button>
  );
}
