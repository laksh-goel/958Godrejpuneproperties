import React, { useState, useEffect } from "react";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.webp";
import InfoCard from "./Infocard";

const images = [
  {
    src: slide1,
  
  },
  {
    src: slide2,

  },
  {
    src: slide3,
    
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const prevSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex(index);
  };

  const pointerStartX = React.useRef(null);

  const onPointerDown = (e) => {
    pointerStartX.current = e.clientX;
  };

  const onPointerUp = (e) => {
    if (pointerStartX.current === null) return;
    const pointerEndX = e.clientX;
    const diff = pointerEndX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  return (
    <header
      className="relative w-full max-w-full overflow-hidden select-none cursor-pointer"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            draggable={false}
          />
        ))}

        {/* Manual Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full transition"
          type="button"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full transition"
          type="button"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-4 h-4 rounded-full border-2 transition-colors duration-300
                ${
                  idx === currentIndex
                    ? "bg-white border-white"
                    : "bg-gray-400 border-gray-600"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
