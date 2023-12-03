import React from "react";
import backcard from "../assets/backCard.jpeg";
import "./ui.css";

function TarotCard({ image }) {
  return (
    <>
      <div className="tarot-card">
        <div className="front">
          <img src={image} alt="tarot card image" className="card-image" />
        </div>

        <div className="back">
          <img src={backcard} alt="tarot card image" className="card-image" />
        </div>
      </div>
    </>
  );
}

export default TarotCard;
