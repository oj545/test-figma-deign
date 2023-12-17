import React from "react";
import "./CSS/ui.css";

function Bubble({ size, position, color1, color2, rotate }) {
  return (
    <div
      className="bubble "
      style={{
        position: "absolute",
        top: `${position?.top}vh`,
        left: `${position?.left}vw`,
        width: `${size}em`,
        height: `${size}em`,

        background: `linear-gradient(to left, ${color1} 0%, ${color2} 100% )`,
      }}></div>
  );
}

export default Bubble;
