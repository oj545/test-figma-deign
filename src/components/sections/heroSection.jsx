import React from "react";
import TarotCard from "../UI/TarotCard";
import heroCard from "../../assets/heroCard.jpg";
import "./CSS/herosection.css";
import whatsapp from "../../assets/whatsApp.png";

import goldCup from "../../assets/goldCup.jpg";
import Bubble from "../UI/Bubble";

function HeroSection() {
  const phoneNumber = "+972505336334";
  const message = "שלום קטיה אני מעוניין/נת לקבוע פגישה";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="section hero-section">
      <div className="grid max-size hero-layout  ">
        <div className="hero-cards">
          <img className="hero-card card1" src={heroCard} alt="tarot card" />
          <img className="hero-card card2" src={goldCup} alt="tarot card" />
        </div>
        <div dir="rtl" className="hero-content">
          <h1 className="section-headline hero-headline">חוחמת הטרוט</h1>

          <p dir="rtl" className="content content-center ">
            <span>האם אתה מחפש תשובות לשאלות העמוקות ביותר של החיים? </span>
            <br />
            האם
            <span>
              אתה רוצה הבנה מעמיקה יותר של המסע שלך ושל האתגרים העומדים בפניך?
            </span>
            <br />
            <span>
              קלפי טארוט מציעים דרך עמוקה ומאירת עיניים להתחבר לחוכמת היקום
            </span>
            <br />
          </p>
          <div className="whatsapp-link">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <p>קטיה שיינגיזכט</p>
              <img src={whatsapp} alt="whatapp-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
