import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./index.css";
import MemoryCard from "./components/MemoryCard";
import BackgroundVideo from "./components/BackgroundVideo";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundVideo />
    <div className="memory-card__app">
      <MemoryCard />
    </div>
    <Footer />
  </React.StrictMode>
);
