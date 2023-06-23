import React, { useState } from "react";
import "./style.css";
import { Cards1, Cards2, Cards3 } from "./Cards/Cards";

const Section4 = () => {
  const [viewON, setViewOff] = useState(false);

  const toggleViewAll = () => {
    setViewOff(!viewON);

    if (viewON === false) {
      document.getElementById("CardsSection4-2").style.display = "flex";
      document.getElementById("btnSection4").style.display = "none";
    }
  };

  return (
    <div id="section4">
      <div id="section4Title">
        <div id="Title4">
          <h3>Destination</h3>
          <h1>
            Our Best Destination <br></br> For You
          </h1>
          <p>
            With a world full of exciting destination , choosing the perfect
            vocation spot can be challenge. That’s why skyward complied list of
            the best places to vist
          </p>
        </div>
        <div id="buttonTitle">
          <button id="btnSection4" onClick={toggleViewAll}>
            View all
          </button>
        </div>
      </div>

      <div id="CardsSection4">
        <Cards1 />
        <Cards2 />
        <Cards3 />
      </div>

      <div id="CardsSection4-2">
        <Cards1 />
        <Cards2 />
        <Cards3 />
      </div>
    </div>
  );
};

export default Section4;
