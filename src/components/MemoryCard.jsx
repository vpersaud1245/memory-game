import { useState } from "react";
import Gameboard from "./Gameboard";
import "../styles/difficultyMenu.css";
import logo from "../assets/images/logo.png";
import Footer from "./Footer";

export default function MemoryCard() {
  const [difficulty, setDifficulty] = useState(null);

  // Render selected game difficulty
  if (difficulty) return <Gameboard difficulty={difficulty} />;

  // Render Main Menu
  return (
    <div className="difficulty__menu">
      <img
        className="difficulty-menu__logo"
        src={logo}
        alt="gravity-falls-logo"
      />
      <h1 className="difficulty-menu__title">Memory Game</h1>
      <div className="difficulty-menu__difficulty-btns">
        <button
          className="difficulty__btn"
          onClick={() => setDifficulty("easy")}
        >
          Easy
        </button>
        <button
          className="difficulty__btn"
          onClick={() => setDifficulty("medium")}
        >
          Medium
        </button>
        <button
          className="difficulty__btn"
          onClick={() => setDifficulty("hard")}
        >
          Hard
        </button>
      </div>
      <Footer />
    </div>
  );
}
