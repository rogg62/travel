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
    <div>
      <Base
        img={Img1}
        day="6"
        night="6"
        price="549"
        city="Inggris"
        location="London, Inggris"
      />
    </div>
  );
};

const Cards2 = () => {
  return (
    <div>
      <Base
        img={Img2}
        day="2"
        night="2"
        price="349"
        city="Amã"
        location="Jordânia, Amã"
      />
    </div>
  );
};

const Cards3 = () => {
  return (
    <div className="none">
      <Base
        img={Img3}
        day="5"
        night="4"
        price="849"
        city="Mianmar"
        location="Birmânia, Mianmar"
      />
    </div>
  );
};

const Cards4 = () => {
  return (
    <div>
      <Base
        img={Img4}
        day="7"
        night="6"
        price="1049"
        city="Agra"
        location="Índia, Agra"
      />
    </div>
  );
};

const Cards5 = () => {
  return (
    <div>
      <Base
        img={Img5}
        day="4"
        night="5"
        price="755"
        city="Beijing"
        location="China, Beijing"
      />
    </div>
  );
};

const Cards6 = () => {
  return (
    <div className="none">
      <Base
        img={Img6}
        day="7"
        night="8"
        price="967"
        city="Tokyo"
        location="Japan"
      />
    </div>
  );
};

const Cards7 = () => {
  return (
    <div>
      <Base
        img={Img7}
        day="7"
        night="8"
        price="967"
        city="Tanzânia"
        location="Tanzânia, Morogoro"
      />
    </div>
  );
};

export { Cards1, Cards2, Cards3, Cards4, Cards5, Cards6, Cards7 };
