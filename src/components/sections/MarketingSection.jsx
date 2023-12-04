import React from "react";
import "./CSS/marketingSection.css";
import theSunCard from "../../assets/theSun.jpg";
import TarotCard from "../UI/TarotCard";
function MarketingSection() {
  return (
    <section className="section">
      <h2 className="section-headline">התרונות התרות</h2>
      <div className="marketing-layout1 grid max-size">
        <TarotCard image={theSunCard} />
        <p dir="rtl" className="marketing-content content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum
          vitae voluptas corrupti impedit mollitia distinctio id dolor
          voluptates sit, sapiente ad consequuntur rem. Accusamus neque iure
          reiciendis facere velit libero quis sint tempora. Sequi dicta quis aut
          rerum magnam!
        </p>
      </div>
      <div className="marketing-layout2 grid max-size">
        <p dir="rtl" className="marketing-content content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum
          vitae voluptas corrupti impedit mollitia distinctio id dolor
          voluptates sit, sapiente ad consequuntur rem. Accusamus neque iure
          reiciendis facere velit libero quis sint tempora. Sequi dicta quis aut
          rerum magnam!
        </p>
        <div className="marketing-card2">
          <TarotCard image={theSunCard} />
        </div>
      </div>
    </section>
  );
}

export default MarketingSection;
