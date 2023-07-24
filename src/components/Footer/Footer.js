import React from "react";
import "./style.css";
import Logo from "../../assets/TRAVEL2.svg";
const Footer = () => {
  return (
    <footer id="ContainerFooter">
      <a href="#Section1">
        <img src={Logo} alt="" />
      </a>
      <div id="footer">
        <span>2023 All right reserved</span>
        <div>
          <a href="policy">Privacy Policy</a>
          <a href="Terms">Terms of Service</a>
          <a href="Cookies">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
