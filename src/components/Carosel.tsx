import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Carosel = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">...</CarouselItem>
          <CarouselItem className="basis-1/3">...</CarouselItem>
          <CarouselItem className="basis-1/3">...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Carosel;
