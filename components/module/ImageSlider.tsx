"use client";
import { Image } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Card from "../layout/Card";


export default function ImageSlider() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
  });

  const images = [
    "https://images.unsplash.com/photo-1728326475125-3b4b62b8d2e6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534113356284-9aa4ea943778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <Card>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <Image w={"full"} maxH={"600px"} src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
