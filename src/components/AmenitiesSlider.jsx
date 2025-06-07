import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

import gazebo from "../assets/amenities/gazebo.webp";
import restaurants from "../assets/amenities/restaurants.webp";
import squash from "../assets/amenities/squash.webp";
import pool from "../assets/amenities/pool.webp";
import sitting from "../assets/amenities/sitting.webp";
import walking from "../assets/amenities/walking.webp";

import deck from "../assets/amenities/deck.webp";
import gallery from "../assets/amenities/gallery.webp";

const amenities = [
  { title: "Gazebo", img: gazebo },
  { title: "Restaurants", img: restaurants },
  { title: "Squash", img: squash },
  { title: "Pool", img: pool },
  { title: "Sitting Area", img: sitting },
  { title: "Walking", img: walking },
  { title: "Deck", img: deck },
  { title: "Gallery", img: gallery },
];

export default function AmenitiesSlider() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-10 px-4 md:px-12 bg-white relative z-0">
      <h2 className="text-center text-3xl font-bold text-green-800 mb-10">
        Godrej Aqua Resort Residences Hinjewadi Pune - Amenities
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, Grid]}
        spaceBetween={24}
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
          1024: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
        }}
      >
        {amenities.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center text-lg font-semibold">
                {item.title}
              </div>

              {/* Overlay that appears on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-300 pointer-events-none">
                  {item.title}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
