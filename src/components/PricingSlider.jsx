import React from "react";
import Slider from "react-slick";

const pricingData = [
  {
    title: "1 BHK",
    size: "560 – 600 sq.ft.",
    price: "₹ On Request",
  },
  {
    title: "2 BHK",
    size: "860 – 900 sq.ft.",
    price: "₹ On Request",
  },
  {
    title: "3 BHK",
    size: "1060 – 1100 sq.ft.",
    price: "₹ On Request",
  },
];

const PricingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-10 bg-gray-50 px-4 md:px-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-900 mb-8">
        Godrej Aqua Resort Residences Hinjewadi Pune – Area & Pricing
      </h2>

      <Slider {...settings}>
        {pricingData.map((item, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200">
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">{item.size}</p>
              <p className="text-green-700 text-lg font-bold mb-4">
                {item.price}
              </p>
              <button className="bg-green-800 hover:bg-green-900 text-white py-2 px-6 rounded-full text-sm font-medium shadow">
                Express Your Interest
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PricingSlider;
