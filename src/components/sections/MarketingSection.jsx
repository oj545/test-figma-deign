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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum
          vitae voluptas corrupti impedit mollitia distinctio id dolor
          voluptates sit, sapiente ad consequuntur rem. Accusamus neque iure
          reiciendis facere velit libero quis sint tempora. Sequi dicta quis aut
          rerum magnam!
        </p>
      </div>
      <div className="grid max-size">
        <p dir="rtl" className="marketing-content2 content content-center ">
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
