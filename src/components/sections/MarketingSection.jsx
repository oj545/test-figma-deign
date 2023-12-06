import React from "react";
import "./CSS/marketingSection.css";
import theSunCard from "../../assets/theSun.jpg";
import TarotCard from "../UI/TarotCard";

function MarketingSection() {
  return (
    <section className="section">
      <h2 className="section-headline">התרונות התרות</h2>
      <div className="grid max-size marketing-layout">
        <div className="marketing-card1 ">
          <TarotCard image={theSunCard} />
        </div>
        <p dir="rtl" className="marketing-content content content-center">
          החיים הם סדרה של צומת דרכים, והטארוט הוא המצפן שלך. קבל בהירות לגבי
          החלטות, גדולות או קטנות, כאשר הקלפים מאירים את הנתיבים הפוטנציאליים
          קדימה. עם טארוט, אתה לא רק מנחש; אתה עושה בחירות מושכלות בהתאם למסע
          הרוחני שלך.
        </p>
      </div>
      <div className="grid max-size">
        <p dir="rtl" className="marketing-content2 content content-center ">
          קלפי טארוט יכולים לספק יותר מאשר הצצה לעתיד. הם מחזיקים את המפתחות
          לפתיחת המסתורין של המסע הייחודי שלך. על ידי קריה בטרוט אנו הולכים מעבר
          לתחזיות, ומשתמשים בכלפים כדי להאיר את דרככם עם תובנות המעצימות אתכם
          להתמודד עם אתגרים באומץ ובהבנה חדשים.
        </p>
        <div className="marketing-card2">
          <TarotCard image={theSunCard} />
        </div>
      </div>
    </section>
  );
}

export default MarketingSection;
