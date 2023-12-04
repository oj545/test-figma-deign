import React from "react";
import "./ui.css";

function Bubble({ size, position, color1, color2, rotate }) {
  return (
    <div
      className="bubble "
      style={{
        position: "absolute",
        top: `${position?.top}%`,
        left: `${position?.left}%`,
        width: `${size}px`,
        height: `${size}px`,

        backgroundImage: `linear-gradient(${rotate}deg, ${color1},${color2})`,
      }}></div>
  );
}

export default Bubble;
