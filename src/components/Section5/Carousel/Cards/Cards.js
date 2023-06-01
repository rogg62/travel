import React from "react";
import Base from "./Base";
//Imagens
import Avatar1 from "./assets/Avatar Image.svg";
import Avatar2 from "./assets/Avatar Image2.svg"
import Avatar3 from "./assets/Avatar Image3.svg"

const Cards1 = () => {
  return (
    <div>
      <Base
        comment='"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."'
        name="Melisa Susanti"
        job="CEO & Founder"
        img={Avatar1}
      />
    </div>
  );
};

const Cards2 = () => {
  return (
    <div>
      <Base
        comment='"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."'
        name="Sayem Ahemd"
        job="CEO & Founder"
        img={Avatar2}
      />
    </div>
  );
};

const Cards3 = () => {
  return (
    <div>
      <Base
        comment='"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."'
        name="Albert Steveno"
        job="CEO & Founder"
        img={Avatar3}
      />
    </div>
  );
};

export { Cards1, Cards2, Cards3 };
