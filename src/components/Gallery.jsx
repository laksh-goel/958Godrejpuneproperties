import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample gallery images — replace with real paths
import bedroom from "../assets/gallery/bedroom.webp";
import gym from "../assets/gallery/gym.webp";
import lobby from "../assets/gallery/lobby.webp";
import hall from "../assets/gallery/hall.webp";

const galleryImages = [
  { title: "Bedroom", img: bedroom },
  { title: "Gym", img: gym },
  { title: "Lobby", img: lobby },
  { title: "Hall", img: hall },
];

export default function GallerySlider() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="py-10 px-4 md:px-12 bg-white relative z-0">
      <h2 className="text-center text-3xl font-bold text-green-800 mb-10">
        Godrej Aqua Resort Residences Hinjewadi Pune - Gallery
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {galleryImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 cursor-pointer group"
              onClick={() => setModalImage(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-center text-lg font-semibold">
                Artistic Impression
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for enlarged image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-3xl max-w-3xl w-full mx-4">
            {/* Close button */}
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-3xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            <img
              src={modalImage.img}
              alt={modalImage.title}
              className="w-full h-auto object-contain rounded-2xl border border-gray-200"
            />
            <p className="text-center mt-3 text-gray-700 text-xl font-semibold">
              {modalImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
