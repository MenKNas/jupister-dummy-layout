import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

const slides = [
  { image: "/assets/slider-img.jpg", legend: "" },
  { image: "/assets/slider-img.jpg", legend: "" },
  { image: "/assets/slider-img.jpg", legend: "" },
];

function Carousel() {
  return (
    <ResponsiveCarousel
      data-component="Carousel"
      style={{ minHeight: 168 }}
      autoPlay
      infiniteLoop
      showIndicators={false}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      interval={5000}
    >
      {slides.map((slide, index) => {
        return <Slider key={index} slide={slide} />;
      })}
    </ResponsiveCarousel>
  );
}

function Slider({ slide }) {
  return (
    <div>
      <img
        src={slide.image}
        loading="lazy"
        alt="Welcome bonus banner"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          minHeight: "160px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      {/* <div className="h-10 bg-gray-800"></div> */}
    </div>
  );
}

export default function Carousels() {
  return (
    <div className="bg-gray-800" data-component="CarouselSection">
      <div className="flex flex-col justify-center items-center mx-auto">
        <Carousel />
      </div>
    </div>
  );
}
