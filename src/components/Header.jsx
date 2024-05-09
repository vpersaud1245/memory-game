/* eslint-disable react/prop-types */
import logo from "../assets/images/logo.png";
import "../styles/header.css";
export default function Header({ score, bestScore, onClick }) {
  return (
    <header className="header">
      <button className="main-menu__btn" onClick={onClick}>
        <img
          className="main-menu-btn__logo"
          src={logo}
          alt="gravity-falls-logo"
        />
      </button>
      <div className="score__container">
        <div className="score">{`Score: ${score}`}</div>
        <div className="best-score">{`Best Score: ${bestScore}`}</div>
      </div>
    </header>
  );
}
