import React from "react";
import Base from "./Base";
import "./Base.css";
import Card1 from "../../../assets/Cards/card.svg";
import Card2 from "../../../assets/Cards/card2.svg";
import Card3 from "../../../assets/Cards/card3.svg";

const Cards1 = () => {
  return (
    <div>
      <Base
        local="mountain"
        location="Bali, Indonesia"
        review=" 5.0 (7,562 reviews)"
        img={Card1}
        price="$6,999.000"
      />
    </div>
  );
};

const Cards2 = () => {
  return (
    <div>
      <Base
        local="mountain"
        location="Lombok, Indonesia"
        review=" 5.0 (7,777 reviews)"
        img={Card2}
        price="$7,449.000"
      />
    </div>
  );
};

const Cards3 = () => {
  return (
    <div className="base">
      <Base
        local="beach"
        location="Goa, India "
        review="5.0 (7,777 reviews)"
        img={Card3}
        price="$3,799.000"
      />
    </div>
  );
};
export { Cards1, Cards2, Cards3 };
