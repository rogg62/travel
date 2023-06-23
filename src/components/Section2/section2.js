import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./style.css";

import Asia from "./Links/Asia";
import Hot from "./Links/Hot";
import Africa from "./Links/Africa";
import Europa from "./Links/Europa";
import America from "./Links/America";

const Section2 = () => {
  return (
    <section id="section2">
      <h3>BEST PACKAGE</h3>
      <h1>Our Best Packages For You</h1>
      <div id="ContainerSection2">
        <BrowserRouter>
          <nav id="menu2">
            <NavLink activeclassename="active" className="link" to="/">
              Hot Details
            </NavLink>
            <NavLink activeclassename="active" className="link" to="/asia">
              Asia
            </NavLink>
            <NavLink activeclassename="active" className="link" to="/africa">
              Africa
            </NavLink>
            <NavLink activeclassename="active" className="link" to="/europa">
              Europe
            </NavLink>
            <NavLink activeclassename="active" className="link" to="/america">
              America
            </NavLink>
          </nav>
          <Routes>
            <Route exact path="/" element={<Hot />} />
            <Route path="/asia" element={<Asia />} />
            <Route path="/africa" element={<Africa />} />
            <Route path="/europa" element={<Europa />} />
            <Route path="/america" element={<America />} />
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
};

export default Section2;
