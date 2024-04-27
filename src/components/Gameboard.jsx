/* eslint-disable react/prop-types */

function getNumOfCardsFromDifficulty(difficulty) {
  if (difficulty === "easy") return 3;
  if (difficulty === "medium") return 4;
  if (difficulty === "hard") return 5;
}

export default function Gameboard({ difficulty }) {
  const numOfCards = getNumOfCardsFromDifficulty(difficulty);

  const cards = [];
  for (let i = 0; i < numOfCards; i += 1) {
    cards.push(
      <div
        className="card"
        style={{ height: "100px", width: "100px", border: "1px solid gray" }} // REMOVE ME
        key={i}
      ></div>
    );
  }
  return <div className="gameboard">{cards}</div>;
}
