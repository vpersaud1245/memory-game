import "../styles/gameoverScreen.css";
import gameLossBackground from "../assets/images/game-loss-background.webp";
import gameWinBackground from "../assets/images/game-win-background.avif";
/* eslint-disable react/prop-types */
export default function GameoverScreen({ isLoss, onClick }) {
  return (
    <div
      className="gameover-screen"
      style={{
        backgroundImage: isLoss
          ? `url(${gameLossBackground})`
          : `url(${gameWinBackground})`,
        boxShadow: isLoss
          ? "0 5px 20px #611111, 0 -5px 20px #611111"
          : "0 5px 20px #113661, 0 -5px 20px #113661",
      }}
    >
      <h1
        className="gameover-screen__title"
        style={{ backgroundColor: isLoss ? "#af0f0f" : "#3268a5" }}
      >
        {isLoss === true ? "You lose!" : "You Win!"}
      </h1>
      <button className="gameover-screen__restart-btn" onClick={onClick}>
        Restart
      </button>
    </div>
  );
}
