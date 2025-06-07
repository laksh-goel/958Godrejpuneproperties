import React from "react";
import masterPlanImg from "../assets/master-plan.webp";
import unitPlanImg from "../assets/unit-plan.jpg";

const PlanSection = () => {
  const plans = [
    {
      title: "Godrej Aqua Resort Residences Hinjewadi Pune - Master Plan",
      image: masterPlanImg,
      overlay: "Proposed Master Plan Layout",
    },
    {
      title: "Godrej Aqua Resort Residences Hinjewadi Pune - Unit Plan",
      image: unitPlanImg,
      overlay: "Proposed Unit Plan Layout",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 font-serif text-[#212529] text-base">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[45%] flex flex-col items-center"
          >
            {/* Title */}
            <h3
              className="text-[20px] font-bold text-center mb-6 px-2"
              style={{
                fontFamily: "'Roboto Serif', serif",
                color: "#22644B",
              }}
            >
              {plan.title}
            </h3>

            {/* Image with overlay and blur */}
            <div className="relative w-full max-w-[520px] h-[320px] rounded-tl-[80px] rounded-br-[80px] border-4 border-white shadow-xl overflow-hidden">
              <img
                src={plan.image}
                alt={plan.overlay}
                className="w-full h-full object-cover filter blur-sm scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <p className="text-white text-center font-semibold text-lg px-4">
                  {plan.overlay}
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              className="mt-6 px-6 py-2 rounded-full bg-green-800 text-white font-semibold shadow-md border border-green-900 hover:bg-green-900 transition-all"
              data-bs-toggle="modal"
              data-bs-target="#enqPopup"
              data-form-name={plan.overlay}
              data-formtitle="Costing Details"
              data-formbtn="Submit"
            >
              Express Your Interest
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanSection;
