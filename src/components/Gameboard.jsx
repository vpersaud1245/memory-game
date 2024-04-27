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

function checkForLoss(cardsAlreadySelected, cardInfo) {
  if (cardsAlreadySelected.includes(cardInfo)) {
    console.log("Card already chosen");
    return true;
  }
  return false;
}

export default function Gameboard({ difficulty }) {
  const numOfCards = getNumOfCardsFromDifficulty(difficulty);
  const cardData = getCardData(numOfCards);
  const [round, setRound] = useState(1);
  const [cardsAlreadySelected, setCardsAlreadySelected] = useState([]);

  const cards = cardData.map((cardInfo) => (
    <Card
      key={cardInfo.id}
      cardInfo={cardInfo}
      onClick={() => {
        setCardsAlreadySelected([...cardsAlreadySelected, cardInfo]);
        if (checkForLoss(cardsAlreadySelected, cardInfo)) return;
        setRound(round + 1);
      }}
    />
  ));

  return (
    <div className="gameboard">
      <div className="roundNumber">{round}</div>
      <div className="cards">{cards}</div>
    </div>
  );
}
