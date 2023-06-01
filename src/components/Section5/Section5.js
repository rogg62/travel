import React from "react";
import "./style.css";
import Carousel, { CarouselItem } from "./Carousel/Carousel";
import { Cards1, Cards2, Cards3 } from "./Carousel/Cards/Cards";

const Section5 = () => {
  return (
    <section id="Testimonial">
      <h3>TESTIMONIAL</h3>
      <h1>What Our Client Say</h1>
      <p>Creative a visualidentify for your company, and an overall brand</p>

      <Carousel>
        <CarouselItem>
          <Cards1 />
          <Cards2 />
          <Cards3 />
        </CarouselItem>
        <CarouselItem>
          <Cards1 />
          <Cards2 />
          <Cards3 />
        </CarouselItem>
        <CarouselItem>
          <Cards1 />
          <Cards2 />
          <Cards3 />
        </CarouselItem>
      </Carousel>
      
    </section>
  );
};

export default Section5;
