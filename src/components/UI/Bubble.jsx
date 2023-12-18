import React from "react";
import "./CSS/ui.css";

function Bubble({ size, position, color1, color2, rotate }) {
  return (
    <div
      className="bubble "
      style={{
        position: "absolute",
        top: `${position?.top}%`,
        left: `${position?.left}%`,
        width: `${size}rem`,
        height: `${size}rem`,

        background: `linear-gradient(to left, ${color1} 0%, ${color2} 100% )`,
      }}></div>
  );
}

export default Bubble;
