import "./style.css";
import React from "react";
import Image2 from "../../assets/Image2.svg";

const Section3 = () => {
  return (
    <div id="section3">
      <div id="sectionTitle">
        <h3>OUR EXPERIENCE</h3>
        <h1>With Our Experience We Will Service You</h1>
        <p>
          We always out customer happy by providing as many chises as possible
          we always our customers happy by providing as many possible by
          providing as many chises as
        </p>
        <button>Read More</button>

        <div id="TitleNumbers">
          <div>
            <h1>235</h1>
            <span>Happy Customers</span>
          </div>
          <div>
            <h1>544</h1>
            <span>Years Experience</span>
          </div>
          <div>
            <h1>123+</h1>
            <span>Destination Collaboration</span>
          </div>
        </div>
      </div>
      <img src={Image2} alt="" />
    </div>
  );
};

export default Section3;
