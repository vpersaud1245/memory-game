import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./index.css";
import MemoryCard from "./components/MemoryCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MemoryCard />
  </React.StrictMode>
);
