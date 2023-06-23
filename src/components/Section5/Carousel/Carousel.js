import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div id="Carousel-Item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 8000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div id="Carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <button
        id="Button1"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      ></button>

      <button
        id="Button2"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      ></button>

      <div id="indicadores">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              id="marcador"
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
