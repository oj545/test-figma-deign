import React from "react";
import "./CSS/about.css";

function AboutSection() {
  return (
    <section className="section about-section center-element max-size">
      <h2 className="section-headline">קצת עלי</h2>
      <div className="about-image">
        <div className="my-image"></div>
      </div>
      <p dir="rtl" className="content about-content">
        <span>נעים מאוד, שמי קטיה.</span>
        <br />
        במהותי ובעיסוקיי הרבים במהלך השנים אני מטפלת, בין אם זה בעבודתי כמדריכת
        חינוך מיוחד, כאם או כחברה. עם השנים אספתי כלים חינוכיים וטיפוליים רבים.
        עוד מגיל צעיר נחשפתי לעולם המיסטיקה והרוח בבית אימי וחשתי עליו משיכה
        גדולה. אחד מהכלים הטיפולים בהן אני עוסקת הוא קלפי הטארוט. אני מזמינה
        אתכם להתנסות ולצאת למסע קסום של העצמה אישית.
      </p>
    </section>
  );
}

export default AboutSection;
