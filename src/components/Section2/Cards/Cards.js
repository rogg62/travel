import React from "react";
import Base from "./Base";
import Img1 from "../../../assets/Cards/Rectangle 3.svg";
import Img2 from "../../../assets/Cards/Rectangle 4.svg";
import Img3 from "../../../assets/Cards/Rectangle 5.svg";
import Img4 from "../../../assets/Cards/india-g29cff8f11_1280.jpg";
import Img5 from "../../../assets/Cards/pexels-manuel-joseph-19872.jpg";
import Img6 from "../../../assets/Cards/pexels-james-wheeler-1519088.jpg";
import Img7 from "../../../assets/Cards/pexels-pallab-halder-1049500.jpg";
const Cards1 = () => {
  return (
    <Base
      img={Img1}
      day="6"
      night="6"
      price="549"
      city="Blue lagoon"
      location="London, Inggris"
    />
  );
};

const Cards2 = () => {
  return (
    <Base
      img={Img2}
      day="2"
      night="2"
      price="349"
      city="Petra"
      location="Jordânia, Amã"
    />
  );
};

const Cards3 = () => {
  return (
    <Base
      img={Img3}
      day="5"
      night="4"
      price="849"
      city="Old bagan"
      location="Birmânia, Mianmar"
    />
  );
};

const Cards4 = () => {
  return (
    <Base
      img={Img4}
      day="7"
      night="6"
      price="1049"
      city="Taj-mahal"
      location="Índia, Agra"
    />
  );
};

const Cards5 = () => {
  return (
    <Base
      img={Img5}
      day="4"
      night="5"
      price="755"
      city="Great Wall"
      location="China, Beijing"
    />
  );
};

const Cards6 = () => {
  return (
    <Base
      img={Img6}
      day="7"
      night="8"
      price="967"
      city="Tokyo"
      location="Japan"
    />
  );
};

const Cards7 = () => {
  return (
    <Base
      img={Img7}
      day="7"
      night="8"
      price="967"
      city="Mikumi"
      location="Tanzânia, Morogoro"
    />
  );
};

export { Cards1, Cards2, Cards3, Cards4, Cards5, Cards6, Cards7 };
