import React from "react";
import "./CSS/ui.css";
// `linear-gradient(to right, ${color1} 0%, ${color2} 50%, #0000ff 100%)`
function Bubble({ size, position, color1, color2, rotate }) {
  return (
    <div
      className="bubble "
      style={{
        position: "absolute",
        top: `${position?.top}%`,
        left: `${position?.left}%`,
        width: `${size}em`,
        height: `${size}em`,

        background: `linear-gradient(to left, ${color1} 0%, ${color2} 100% )`,
      }}></div>
  );
}

export default Bubble;
