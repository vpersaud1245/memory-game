/* eslint-disable react/prop-types */
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

function Card({ characterName, characterSrc }) {
  /* REMOVE INLINE CSS STYLES */
  return (
    <div
      className="card"
      style={{ height: "100px", width: "100px", border: "1px solid gray" }}
    >
      <img
        src={characterSrc}
        alt={characterName + "Img"}
        style={{ height: "100px", width: "100px" }}
      />
      <div className="characterName">{characterName}</div>
    </div>
  );
}

export default function Gameboard({ difficulty }) {
  const numOfCards = getNumOfCardsFromDifficulty(difficulty);
  const cardData = getCardData(numOfCards);

  const cards = cardData.map((cardInfo) => (
    <Card
      key={cardInfo.id}
      characterName={cardInfo.characterName}
      characterSrc={cardInfo.src}
    />
  ));
  return <div className="gameboard">{cards}</div>;
}
