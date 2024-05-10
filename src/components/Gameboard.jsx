/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { characters } from "../characters";
import GameoverScreen from "./GameoverScreen";
import "../styles/gameboard.css";
import Header from "./Header";
import MemoryCard from "./MemoryCard";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

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
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [cardsClass, setCardsClass] = useState("cards");
  const [cardClass, setCardClass] = useState("card");

  useEffect(() => {
    if (roundsWon > 0) {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.classList.remove("rotate");
      });
    }
  }, [roundsWon]);

  if (score > bestScore) setBestScore(score);

  let cardData = getCardData(numOfCards);
  while (
    !hasNewCard(cardData, cardsAlreadySelected) &&
    roundsWon < numOfRounds
  ) {
    cardData = getCardData(numOfCards);
  }

  function handleCardClick(cardInfo) {
    if (checkForLoss(cardsAlreadySelected, cardInfo)) {
      setIsLoss(true);
      setCardsClass("cards pointer-events-none");
    } else {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => card.classList.add("rotate"));
      setTimeout(() => {
        setCardClass("card rotate");
        setCardsAlreadySelected([...cardsAlreadySelected, cardInfo]);
        setRoundsWon(roundsWon + 1);
        setScore(score + 1);
      }, 800);
    }
  }

  function handleGameoverRestartClick() {
    setRoundsWon(0);
    setScore(0);
    setCardsAlreadySelected([]);
    setCardsClass("cards");
    if (isLoss) setIsLoss(false);
  }

  function handleLogoClick() {
    setReturnToMain(true);
  }

  const cards = cardData.map((cardInfo) => (
    <div className="main-card-container" key={cardInfo.id}>
      <div className={roundsWon > 0 ? cardClass : "card"}>
        <CardFront
          cardInfo={cardInfo}
          onClick={() => {
            handleCardClick(cardInfo);
          }}
        />
        <CardBack />
      </div>
    </div>
  ));

  if (returnToMain === true) {
    return <MemoryCard />;
  }

  return (
    <div className="gameboard">
      <Header score={score} onClick={handleLogoClick} bestScore={bestScore} />
      <div className={cardsClass}>{cards}</div>
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
