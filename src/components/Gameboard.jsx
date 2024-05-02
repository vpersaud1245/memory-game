/* eslint-disable react/prop-types */
import { useState } from "react";
import { characters } from "../characters";
import GameoverScreen from "./GameoverScreen";

function getNumOfCards(difficulty) {
  if (difficulty === "easy") return 3;
  if (difficulty === "medium") return 4;
  if (difficulty === "hard") return 5;
}

function getNumOfRounds(difficulty) {
  if (difficulty === "easy") return 5;
  if (difficulty === "medium") return 7;
  if (difficulty === "hard") return 10;
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
    return true;
  }
  return false;
}

// Return true if cards already selected does not contain card in card data
function hasNewCard(cardData, cardsAlreadySelected) {
  return cardData.some((card) => !cardsAlreadySelected.includes(card));
}

export default function Gameboard({ difficulty }) {
  const numOfCards = getNumOfCards(difficulty);
  const numOfRounds = getNumOfRounds(difficulty);
  const [roundsWon, setRoundsWon] = useState(0);
  const [cardsAlreadySelected, setCardsAlreadySelected] = useState([]);
  const [isLoss, setIsLoss] = useState(false);

  let cardData = getCardData(numOfCards);
  while (
    !hasNewCard(cardData, cardsAlreadySelected) &&
    roundsWon < numOfRounds
  ) {
    cardData = getCardData(numOfCards);
  }

  function handleCardClick(cardInfo) {
    setCardsAlreadySelected([...cardsAlreadySelected, cardInfo]);
    if (checkForLoss(cardsAlreadySelected, cardInfo)) {
      setIsLoss(true);
      return;
    }
    setRoundsWon(roundsWon + 1);
  }

  function handleGameoverRestartClick() {
    setRoundsWon(0);
    setCardsAlreadySelected([]);
    if (isLoss) setIsLoss(false);
  }

  const cards = cardData.map((cardInfo) => (
    <Card
      key={cardInfo.id}
      cardInfo={cardInfo}
      onClick={() => {
        handleCardClick(cardInfo);
      }}
    />
  ));

  return (
    <div className="gameboard">
      <div className="gameboard__round">{`${roundsWon} / ${numOfRounds}`}</div>
      <div className="cards">{cards}</div>

      {/* Display Gameover Screens */}
      {isLoss && (
        <GameoverScreen
          isLoss={true}
          onClick={() => handleGameoverRestartClick()}
        />
      )}
      {roundsWon === numOfRounds && (
        <GameoverScreen
          isLoss={false}
          onClick={() => handleGameoverRestartClick()}
        />
      )}
    </div>
  );
}
