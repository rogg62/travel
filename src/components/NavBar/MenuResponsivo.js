import React from "react";
import { useState } from "react";
import Logo from "../../assets/TRAVEL.svg";
import "./MenuResponsivo.css";

const MenuResponsivo = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div id= "ContainerMenu">
      <div className="MenuResponsive">
        <div className="responsive">
          <img src={Logo} alt="" />
        </div>
        <div id="ContainerLinks" style={{ display: showLinks ? "block" : "none" }}>
          <a href="#news">Home</a>
          <a href="#contact">About</a>
        </div>
        <button className="icon" onClick={toggleLinks}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default MenuResponsivo;
