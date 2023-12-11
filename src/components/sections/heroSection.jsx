import React from "react";
import heroCard from "../../assets/heroCard.jpg";
import "./CSS/herosection.css";
import goldCup from "../../assets/goldCup.jpg";
import TarotCard from "../UI/TarotCard";

function HeroSection({ whatsappUrl }) {
  return (
    <section className="section hero-section">
      <div className="grid max-size hero-layout  ">
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
              <p>לקביעת פגישה</p>
            </a>
          </div>
        </div>
        <div className="hero-cards">
          <TarotCard image={goldCup} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
