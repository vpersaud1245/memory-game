/* eslint-disable react/prop-types */
import { useState } from "react";
import { characters } from "../characters";
import GameoverScreen from "./GameoverScreen";
import Card from "./Card";
import "../styles/gameboard.css";
import Header from "./Header";
import MemoryCard from "./MemoryCard";

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

function checkForLoss(cardsAlreadySelected, cardInfo) {
  if (cardsAlreadySelected.includes(cardInfo)) {
    return true;
  }
  return false;
}

function hasNewCard(cardData, cardsAlreadySelected) {
  return cardData.some((card) => !cardsAlreadySelected.includes(card));
}

export default function Gameboard({ difficulty }) {
  const numOfCards = getNumOfCards(difficulty);
  const numOfRounds = getNumOfRounds(difficulty);
  const [roundsWon, setRoundsWon] = useState(0);
  const [cardsAlreadySelected, setCardsAlreadySelected] = useState([]);
  const [isLoss, setIsLoss] = useState(false);
  const [returnToMain, setReturnToMain] = useState(false);

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

  function handleLogoClick() {
    setReturnToMain(true);
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

  if (returnToMain === true) {
    return <MemoryCard />;
  }

  return (
    <div className="gameboard">
      <Header onClick={handleLogoClick} />
      <div className="cards">{cards}</div>
      <div className="gameboard__round">{`${roundsWon} / ${numOfRounds}`}</div>
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
