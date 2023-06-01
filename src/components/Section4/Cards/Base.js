import "./Base.css";
import MapPin from "../../../assets/map-pin.svg";
import Star from "../../../assets/star.svg";
import React from "react";

const Base = ({ local, location, img, review, price }) => {
  return (
    <div id="CardSection4">
      <img src={img} alt="" />

      <div id="infoCard">
        <div>
          <span id="span1">
            <img src={Star} alt="" /> {review}
          </span>
          <span id="span">{price}</span>
        </div>

        <h1>Enjoy the beauty of a nice {local} </h1>
        <span>
          <img src={MapPin} alt="" />
          {location}
        </span>
      </div>
    </div>
  );
};

export default Base;
