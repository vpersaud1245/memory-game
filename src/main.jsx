import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./index.css";
import MemoryCard from "./components/MemoryCard";
import BackgroundVideo from "./components/BackgroundVideo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundVideo />
    <div className="memory-card__app">
      <MemoryCard />
    </div>
  </React.StrictMode>
);
