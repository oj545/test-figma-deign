import React from "react";
import "./CSS/marketingSection.css";
import empressCard from "../../assets/empress.jpg";
import TarotCard from "../UI/TarotCard";

function MarketingSection() {
  return (
    <section className="section">
      <h2 className="section-headline">התרונות התרות</h2>
      <div className="grid max-size marketing-layout">
        <div className="marketing-card1  ">
          <TarotCard image={empressCard} />
        </div>
        <p dir="rtl" className="marketing-content content content-center">
          קלפי טארוט מחזיקים את המפתחות לפתיחת המסתורין של המסע הייחודי של האדם.
          הם מאירים את הנתיבים הפוטנציאליים ומשמשים כמצפן על מנת לנוע קדימה.
        </p>
      </div>
    </section>
  );
}

export default MarketingSection;
