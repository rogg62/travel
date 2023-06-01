import "./Menu.css";
import { useState } from "react";
import Travel from "../../assets/TRAVEL.svg";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };


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
            <button className="dropdown-toggle" onClick={toggleMenu}>
              Services
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <a href="1">Link 1</a>
                <a href="2">Link 2</a>
                <a href="1">Link 3</a>
              </div>
            )}
          </div>

          {/*Dropdown Pricing */}
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleMenu2}>
              Pricing 
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            {isOpen2 && (
              <div className="dropdown-content">
                <a href="1">Link 1</a>
                <a href="1">Link 2</a>
                <a href="1">Link 3</a>
              </div>
            )}
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
