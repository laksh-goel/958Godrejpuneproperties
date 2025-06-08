import React from "react";
import "@fontsource/roboto-serif";
import contact from "../assets/contact.webp";

const ContactForm = () => {
  return (
    <div className="bg-gray-100 font-['Roboto Serif']">
      <div className="w-full bg-white shadow-lg rounded-lg p-6 relative">
        {/* Top Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center text-sm">
            <i className="mr-2">📞</i>Request Call Back
          </button>
          <a
            href="tel:‪+917417175418‬"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center text-sm"
          >
            <i className="mr-2">📞</i>‪+91 7417175418‬
          </a>
        </div>

        {/* Enquire Now Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">ENQUIRE NOW</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <div className="flex items-center border border-gray-300 rounded-md">
            <span className="flex items-center px-3 text-gray-500 bg-gray-100">+91</span>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="text-sm text-gray-500">
            <input type="checkbox" className="mr-2" />
            Please be advised that this website is not intended to facilitate any
            sales transactions. I acknowledge that the project in which I am
            expressing interest has not yet secured RERA clearance. The purpose
            of this website is solely to generate interest and gather
            information. I hereby consent to the use of my provided data in
            accordance with the established{" "}
            <a href="#" className="text-green-600 underline">privacy policy</a>.
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Express Your Interest
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-6 flex justify-center items-center">
          <div className="text-center">
            <img
              src={contact}
              alt="Free Pickup & Drop Service"
              className="w-24 mx-auto mb-2"
            />
            <p className="text-sm font-medium text-gray-700">FREE PICKUP & DROP SERVICE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;