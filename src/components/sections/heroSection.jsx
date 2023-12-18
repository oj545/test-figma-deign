import React from "react";
import "./CSS/herosection.css";
import theSun from "../../assets/theSun.jpg";
import TarotCard from "../UI/TarotCard";

function HeroSection({ whatsappUrl }) {
  const cardContent1 =
    "קלף השמש מביא תקווה ושמחה. אחרי החושך, השמש תזרח והאור שיגיע יישנה את חיינו.";

  return (
    <section className="section hero-section">
      <div className="grid max-size hero-layout  ">
        <div dir="rtl" className="hero-content">
          <h1 className="section-headline hero-headline">חוכמת הטארוט</h1>

          <div className="content content-center ">
            <p dir="rtl">האם תהיה לי זוגיות בתקופה הקרובה? </p>
            <p dir="rtl">האם עלי להחליף את מקום העבודה בשנה הקרובה?</p>
            <p dir="rtl">אני נמצא(ת) בצומת דרכים, מה עלי לבחור?</p>
            <p dir="rtl">
              אם את(ה) רוצה הבנה מעמיקה יותר של המסע שלך ושל האתגרים העומדים
              בפניך, קלפי טארוט מציעים דרך עמוקה ומאירת עיניים להתחבר לחוכמת
              היקום.
            </p>
          </div>
          <div className="whatsapp-link">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <p>לקביעת פגישה</p>
            </a>
          </div>
        </div>
        <div className="hero-cards">
          <TarotCard image={theSun} content={cardContent1} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
