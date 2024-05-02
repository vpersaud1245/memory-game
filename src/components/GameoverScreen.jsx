/* eslint-disable react/prop-types */
export default function GameoverScreen({ isLoss, onClick }) {
  return (
    <div className="gameover-screen">
      <h1 className="gameover-screen__title">
        {isLoss === true ? "You Lose" : "You Win"}
      </h1>
      <button className="gameover-screen__restart-btn" onClick={onClick}>
        Restart
      </button>
    </div>
  );
}