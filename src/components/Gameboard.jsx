/* eslint-disable react/prop-types */
import { useState } from "react";
import { characters } from "../characters";

function getNumOfCardsFromDifficulty(difficulty) {
  if (difficulty === "easy") return 3;
  if (difficulty === "medium") return 4;
  if (difficulty === "hard") return 5;
}

function getCardData(numOfCards) {
  // Randomize the array order
  const shuffledCharacterData = characters.toSorted(function () {
    return 0.5 - Math.random();
  });

  // Select data based on number of cards needed
  return shuffledCharacterData.slice(0, numOfCards);
}

function Card({ cardInfo, onClick }) {
  return (
    <button
      className="card"
      style={{ height: "100px", width: "100px", border: "1px solid gray" }}
      onClick={onClick}
    >
      <img
        src={cardInfo.src}
        alt={cardInfo.name + "Img"}
        style={{ height: "100px", width: "100px" }}
      />
      <div className="characterName">{cardInfo.name}</div>
    </button>
  );
}

export default function Gameboard({ difficulty }) {
  const numOfCards = getNumOfCardsFromDifficulty(difficulty);
  const cardData = getCardData(numOfCards);
  const [round, setRound] = useState(1);

  const cards = cardData.map((cardInfo) => (
    <Card
      key={cardInfo.id}
      cardInfo={cardInfo}
      onClick={() => setRound(round + 1)}
    />
  ));

  return (
    <div className="gameboard">
      <div className="roundNumber">{round}</div>
      <div className="cards">{cards}</div>
    </div>
  );
}
