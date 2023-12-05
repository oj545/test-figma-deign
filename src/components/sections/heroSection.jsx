import React from "react";
import TarotCard from "../UI/TarotCard";
import heroCard from "../../assets/heroCard.jpg";
import "./CSS/herosection.css";

import goldCup from "../../assets/goldCup.jpg";
import Bubble from "../UI/Bubble";

const bubbles = [
  {
    size: 200,
    position: { top: 7, left: 50 },
    rotate: 100,
    color1: "#8B78FF",
    color2: "#F8B5D3",
  },
  {
    size: 200,
    position: { top: 7, left: 50 },
    rotate: 100,
    color1: "#8B78FF",
    color2: "#F8B5D3",
  },
  {
    size: 200,
    position: { top: 7, left: 50 },
    rotate: 100,
    color1: "#8B78FF",
    color2: "#F8B5D3",
  },
];

function HeroSection() {
  return (
    <section className="section hero-section">
      {bubbles.map((bubble, i) => {
        const { size, position, rotate, color1, color2 } = bubble;
        return (
          <Bubble
            key={i}
            size={size}
            position={position}
            rotate={rotate}
            color1={color1}
            color2={color2}
          />
        );
      })}

      <div className="grid max-size hero-layout  ">
        <div className="hero-cards">
          <img className="hero-card card1" src={heroCard} alt="tarot card" />
          <img className="hero-card card2" src={goldCup} alt="tarot card" />
        </div>
        <div dir="rtl" className="hero-content">
          <h1 className="section-headline">חוחמת הטרוט</h1>
          <p className="content content-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            esse, consequatur adipisci odit optio deleniti itaque fugiat
            voluptatibus eos explicabo! Voluptate aliquid aspernatur et libero.
            Illum provident modi nostrum temporibus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
