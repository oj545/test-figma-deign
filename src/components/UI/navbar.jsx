import React from "react";
import "./CSS/navbar.css";
import logo from "../../assets/logo1.png";
import whatsApp from "../../assets/whatsApp.png";

function Navbar({ whatsappUrl }) {
  return (
    <div className="navbar ">
      <div className="nav-items center-element max-size">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="call">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <img src={whatsApp} alt="" />
          </a>
          <p>050-533-6334</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
