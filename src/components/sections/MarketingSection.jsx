import React from "react";
import "./CSS/marketingSection.css";
import empressCard from "../../assets/empress.jpg";
import TarotCard from "../UI/TarotCard";

function MarketingSection() {
  return (
    <section className="section">
      <h2 className="section-headline">התרונות התרות</h2>
      <div className="grid max-size marketing-layout">
        <p dir="rtl" className="marketing-content content content-center">
          קלפי טארוט מחזיקים את המפתחות לפתיחת המסתורין של המסע הייחודי של האדם.
          הם מאירים את הנתיבים הפוטנציאליים ומשמשים כמצפן על מנת לנוע קדימה.
        </p>
        <div className="marketing-card1  ">
          <TarotCard image={empressCard} />
        </div>
      </div>
      {/* <div className="grid max-size">
        <p dir="rtl" className="marketing-content2 content content-center ">
          קלפי טארוט יכולים לספק יותר מאשר הצצה לעתיד. הם מחזיקים את המפתחות
          לפתיחת המסתורין של המסע הייחודי שלך. על ידי קריה בטרוט אנו הולכים מעבר
          לתחזיות, ומשתמשים בכלפים כדי להאיר את דרככם עם תובנות המעצימות אתכם
          להתמודד עם אתגרים באומץ ובהבנה חדשים.
        </p>
        <div className="marketing-card2">
          <TarotCard image={theSunCard} />
        </div>
      </div> */}
    </section>
  );
}

export default MarketingSection;
