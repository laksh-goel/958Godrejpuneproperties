// src/components/ScheduleVisit.jsx

import React from "react";
import sitevisit from "../assets/sitevisit.webp";


const ScheduleVisit = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 md:px-16 text-[#212529] font-serif">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-800 mb-8">
        Schedule a Site Visit
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={sitevisit} // Replace with correct path
            alt="Site Visit"
            className="rounded-tl-[80px] rounded-br-[80px] w-full"
          />
        </div>

        {/* Right Form */}
        <form
          className="w-full md:w-1/2 bg-white shadow p-6 rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <span className="text-xl mr-2">🇮🇳</span>
              <input
                type="tel"
                name="mobile"
                placeholder="+91 Mobile Number"
                className="w-full outline-none text-sm"
                required
              />
            </div>
          </div>

          <div className="text-xs text-gray-700 mb-4">
            <label>
              <input type="checkbox" required className="mr-2" />
              Please be advised that this website is not intended to facilitate
              any sales transactions. I acknowledge that the project in which I
              am expressing interest has not yet secured{" "}
              <span className="font-semibold underline">RERA</span> clearance.
              The purpose of this website is solely to generate interest and
              gather information. I hereby consent to the use of my provided
              data in accordance with the established{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-900 transition"
          >
            Express Your Interest
          </button>
        </form>
      </div>
    </section>
  );
};

export default ScheduleVisit;
