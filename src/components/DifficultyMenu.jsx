import { useState } from "react";

export default function MainMenu() {
  const [difficulty, setDifficulty] = useState();

  // Render selected game difficulty
  if (difficulty === "easy") return <EasyGame />;
  else if (difficulty === "medium") return <MediumGame />;
  else if (difficulty === "hard") return <HardGame />;

  // Render Main Menu
  return (
    <div className="difficulty__menu">
      <button className="difficulty__btn" onClick={setDifficulty("easy")}>
        Easy
      </button>
      <button className="difficulty__btn" onClick={setDifficulty("medium")}>
        Medium
      </button>
      <button className="difficulty__btn" onClick={setDifficulty("hard")}>
        Hard
      </button>
    </div>
  );
}
