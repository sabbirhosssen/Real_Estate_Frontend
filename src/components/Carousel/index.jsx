import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="carousel rounded-box w-full h-dvh">
        <div
          className="carousel-item w-full place-content-center"
          style={{
            backgroundImage: `url('/public/Images/hero_section.png')`,
          }}
        >
          <div className="place-items-center place- border-4">
            From Concept to Creation
          </div>
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
