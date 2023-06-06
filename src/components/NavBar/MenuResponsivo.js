import React from "react";
import { useState } from "react";
import Logo from "../../assets/TRAVEL.svg";
import "./MenuResponsivo.css";

const MenuResponsivo = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const [Dropdown2, setDropdown2] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleDrop = () => {
    setDropdown(!Dropdown);
  };

  const toggleDrop2 = () => {
    setDropdown2(!Dropdown2);
  };

  return (
    <div id="ContainerMenu">
      <div className="MenuResponsive">
        <div className="responsive">
          <img src={Logo} alt="" />
        </div>
        <div
          id="ContainerLinks"
          style={{ display: showLinks ? "block" : "none" }}
        >
          <a className="a" href="#news">
            Home
          </a>
          <a className="a" href="#contact">
            About
          </a>

          <button className="dropdown1" onClick={toggleDrop}>
            Services
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <div
            className="painel"
            style={{ display: Dropdown ? "flex" : "none" }}
          >
            <a href="link">Service 1</a>
            <a href="link">Service 2</a>
            <a href="link">Service 3</a>
          </div>

          <button className="dropdown1" onClick={toggleDrop2}>
            Pricing
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <div
            className="painel"
            style={{ display: Dropdown2 ? "flex" : "none" }}
          >
            <a href="link">Pricing 1</a>
            <a href="link">Pricing 2</a>
            <a href="link">Pricing 3</a>
          </div>

          <button className="button">Log in</button>
          <button className="button">Sign up</button>
        </div>

        <button className="icon" onClick={toggleLinks}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default MenuResponsivo;
