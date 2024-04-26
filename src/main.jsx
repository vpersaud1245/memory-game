import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./index.css";
import DifficultyMenu from "./components/DifficultyMenu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DifficultyMenu />
  </React.StrictMode>
);
