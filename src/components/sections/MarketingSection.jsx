import React from "react";
import "./CSS/marketingSection.css";
import empressCard from "../../assets/empress.jpg";
import TarotCard from "../UI/TarotCard";

function MarketingSection() {
  const cardContent2 =
    "הקיסרית היא אלת הפריון. הקלף מביא מסר של שגשוג, הצלחה ונתינה. נתינה היא המפתח לשפע, עלינו לבדוק אם הנתינה ממלאת או מרוקנת אותנו.";

  return (
    <section className="section">
      {/* <h2 className="section-headline">התרונות התרות</h2> */}
      <div className="grid max-size marketing-layout">
        <p dir="rtl" className="marketing-content content content-center">
          קלפי טארוט מחזיקים את המפתחות לפתיחת המסתורין של המסע הייחודי של האדם.
          הם מאירים את הנתיבים הפוטנציאליים ומשמשים כמצפן על מנת לנוע קדימה.
        </p>
        <div className="marketing-card1  ">
          <TarotCard image={empressCard} content={cardContent2} />
        </div>
      </div>
    </section>
  );
}

export default MarketingSection;
