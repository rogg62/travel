import "./Base.css";
import React from "react";
import PinMap from "../../../assets/map-pin.svg";

const Base = ({ img, day, night, price, city, location }) => {
  return (
    <div id="Card">
   
        <img src={img} alt=""  id="img"/>
        <div id="info">
          <div id="top">
            <span id="days">
              {day} days, {night} Night
            </span>{" "}
            <span id="price">${price}/person</span>
          </div>
          <h1>Explore the beauty of {city}</h1>

          <div id="bottom">
            <span>
              <img src={PinMap} alt="" /> {location}
            </span>
            <button>Explore More</button>
          </div>
        </div>
    </div>
  );
};

export default Base;
