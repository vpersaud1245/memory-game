import { useState } from "react";
import Gameboard from "./Gameboard";

export default function MemoryCard() {
  const [difficulty, setDifficulty] = useState(null);

  // Render selected game difficulty
  if (difficulty) return <Gameboard difficulty={difficulty} />;

  // Render Main Menu
  return (
    <div className="difficulty__menu">
      <button className="difficulty__btn" onClick={() => setDifficulty("easy")}>
        Easy
      </button>
      <button
        className="difficulty__btn"
        onClick={() => setDifficulty("medium")}
      >
        Medium
      </button>
      <button className="difficulty__btn" onClick={() => setDifficulty("hard")}>
        Hard
      </button>
    </div>
  );
}
