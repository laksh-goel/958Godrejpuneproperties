import React from "react";
import slide2 from "../assets/slide2.jpg";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2
            className="text-[22px] font-extrabold text-green-800 my-[20px]"
            style={{ fontFamily: "'Roboto Serif', serif" }}
          >
            About Godrej Aqua Resort Residences
          </h2>

          <p
            style={{
              fontFamily: "'Roboto Serif', serif",
              fontSize: "14px",
              color: "#212529",
              margin: "0 0 24px",
              lineHeight: "1.75",
            }}
          >
            Introducing Godrej Aqua Resort Residences at Hinjewadi, Pune – where
            seamless connectivity meets refined luxury. This exclusive address
            offers unparalleled privacy and breathtaking views. Step into
            elegance with a grand, art gallery-inspired lobby, unwind on your
            private deck, and embrace serenity in a vehicle-free environment.
            Godrej Aqua Resort Residences presents a lifestyle crafted for
            comfort, beauty, and peace of mind — a perfect harmony of modern
            convenience and natural living. Designed to enrich the lives of
            families, seniors, and children alike, it promises a cherished and
            holistic living experience.
          </p>

          {/* Express Your Interest Button */}
          <button
            className="text-lg font-semibold px-10 py-4 rounded-full border border-gray-400 bg-green-800 text-white shadow-lg hover:bg-green-900 mt-4"
            style={{
              animation: "bounce 0.8s infinite",
              transformOrigin: "center bottom",
            }}
          >
            Express your interest
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center">
          <div
            className="rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-1 cursor-pointer w-full max-w-xl"
          >
            <img
              src={slide2}
              alt="About Godrej Aqua Resort"
              className="w-full h-auto object-cover rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Font + Animation Styles */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@400;700&display=swap');

            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default AboutUs;
