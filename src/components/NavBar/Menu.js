import "./Menu.css";
import { useState } from "react";
import Travel from "../../assets/TRAVEL.svg";

const Menu = () => {

  return (
    <nav id="Menu">
      <img src={Travel} alt="logo" />
      <div id="NavbarMenu">
        <nav id="MenuLinks">
          <a className="link" href="#Home">
            Home
          </a>
          <a className="link" href="#About">
            About
          </a>

          {/*Dropdown Services */}
          <div className="dropdown">
            <button className="dropdown-toggle" >
              Services
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            
              <div className="dropdown-content">
                <a href="1">Services 1</a>
                <a href="2">Services 2</a>
                <a href="1">Services 3</a>
              </div>
          </div>

          {/*Dropdown Pricing */}
          <div className="dropdown">
            <button className="dropdown-toggle">
              Pricing
              <span className="material-symbols-outlined">expand_more</span>
            </button>
              <div className="dropdown-content">
                <a href="1">Pricing 1</a>
                <a href="1">Pricing 2</a>
                <a href="1">Pricing 3</a>
              </div>
          </div>
        </nav>

        <div id="buttons">
          <button id="btnMenu1">Login</button>
          <button id="btnMenu2">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
