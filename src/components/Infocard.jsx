import React from "react";
import "./Infocard.css"; // Make sure this CSS file contains the styles below

const InfoCard = () => {
  return (
    <div className="info-card w-[360px] bg-white rounded-2xl shadow-xl p-4 relative overflow-hidden">
      {/* Coming Soon badge with top rounded corners only */}
      <div className="coming-soon-badge text-white text-sm font-semibold py-1 px-6 rounded-t-2xl text-center absolute top-0 left-1/2 -translate-x-1/2">
        Coming Soon
      </div>

      <div className="pt-8"> {/* padding top to avoid overlap with absolute badge */}
        <h1 className="text-2xl font-extrabold text-center text-gray-900 leading-snug font-roboto-serif">
          GODREJ AQUA RESORT <br /> RESIDENCES
        </h1>
        <h2 className="text-sm text-center text-gray-700 mt-2 font-semibold font-roboto-serif">
          At Hinjewadi Phase 1, Pune
        </h2>
        <h3 className="text-sm text-center text-gray-600 mt-1 font-medium font-roboto-serif">
          By Godrej Properties
        </h3>

        <div className="bg-gray-100 rounded-md mt-4 mb-4 px-4 py-2 text-sm font-roboto-serif">
          <div className="flex justify-between border-b py-1">
            <span className="text-gray-700">Land Area</span>
            <span className="font-bold">8.6 Acres</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <span className="text-gray-700">No of Floors</span>
            <span className="font-bold">37</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-700">No. of Towers</span>
            <span className="font-bold">7</span>
          </div>
        </div>

        {/* Codename with continuous pop animation */}
        <div className="bg-green-800 text-white text-center text-sm font-medium py-1 px-3 rounded mb-2 pop-animation font-roboto-serif">
          Codename - Godrej Aquaman
        </div>

        <div className="bg-green-800 text-white text-center text-sm font-medium py-1 px-3 rounded mb-4 font-roboto-serif">
          Exclusive Aqua Resort Residences
        </div>

        <h4 className="text-sm text-gray-800 text-center font-medium font-roboto-serif">
          Premium 1, 2 & 3 BHK Starts
        </h4>
        <h5 className="text-2xl text-green-800 font-bold text-center mt-1 mb-4 font-roboto-serif">
          <small className="text-base align-top">₹</small> On Request
        </h5>

        {/* Button with continuous pop animation */}
        <div className="text-center">
          <button className="bg-green-800 hover:bg-green-800 text-white text-sm font-semibold py-2 px-6 rounded-full shadow-md transition pop-animation font-roboto-serif">
            Express Your Interest
          </button>
        </div>

        <p className="text-xs text-center text-gray-600 font-roboto-serif">RERA : Coming Soon</p>
        <p className="text-xs text-center text-gray-600 font-roboto-serif">
          Agent MahaRERA No. – A51700000043
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
