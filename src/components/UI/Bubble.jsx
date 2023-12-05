import React from "react";
import "./ui.css";
// `linear-gradient(to right, ${color1} 0%, ${color2} 50%, #0000ff 100%)`
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

        background: `linear-gradient(${rotate}deg, ${color1} 60% , ${color2}  )`,
      }}></div>
  );
}

export default Bubble;
