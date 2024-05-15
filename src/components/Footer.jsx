import { useState } from "react";
import bossMable from "../assets/images/boss-mabel.png";
import "../styles/footer.css";
export default function Footer() {
  const [showHelp, setShowHelp] = useState(false);

  if (!showHelp) {
    return (
      <div className="footer">
        <button className="help-btn" onClick={() => setShowHelp(true)}>
          ?
        </button>
      </div>
    );
  } else if (showHelp) {
    return (
      <div className="footer">
        <div className="help-info">
          <div className="help-info-card">
            Dont click on the same card twice
          </div>
          <div className="help-info-card">
            Click on the gravity falls logo to go back
          </div>
        </div>
        <img className="boss-mable-img" src={bossMable} alt="" />
        <button className="help-btn" onClick={() => setShowHelp(false)}>
          X
        </button>
      </div>
    );
  }
}
