import React, { useState } from "react";
import backcard from "../../assets/backCard.jpeg";
import "./CSS/ui.css";

function TarotCard({ image, content }) {
  const [showContent, setShowConstent] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowConstent(!showContent)}
        className={
          showContent ? "tarot-card active-card  " : " tarot-card card-rotate"
        }>
        <div className="front">
          <img src={image} alt="" className="card-image" />
        </div>

        <div className="back">
          {!showContent ? (
            <img src={backcard} alt="" className="card-image" />
          ) : (
            <p dir="rtl">{content}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default TarotCard;
