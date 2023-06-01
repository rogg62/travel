import React from "react";
import "./Base.css";

const Base = ({ comment, name, job, img }) => {
  return (
    <div id="CardCarousel">
      <p id="comment">{comment}</p>
      <div id="box1">
        <img src={img} alt="" />
        <div id="box2">
          <span id="name">{name}</span>
          <span id="job">{job}</span>
        </div>
      </div>
    </div>
  );
};

export default Base;
