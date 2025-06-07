// src/components/Footer.jsx

import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-[#212529] text-sm font-serif px-4 py-10">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Brand Logo + Title */}
         <div className="flex items-center gap-3 -ml-4 justify-center">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                  </div>
        {/* RERA Info */}
        <div className="text-sm text-gray-800">
          <p>Agent MahaRERA No. – A51700000043</p>
          <p>Project MahaRERA No. – Coming Soon</p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Disclaimer : The information provided on this website is exclusively
          intended for informational purposes and should not be construed as an
          offer of services and sale. The project mentioned on this website
          currently has not yet received RERA clearance/number but is in the
          process of registration with the Maharashtra Real Estate Regulatory
          Authority. It is solely intended to generate interest through polling,
          and the name shown on the website is not the proposed or future name
          of the project; it is solely used for branding purposes to generate
          interest. Additionally, we acknowledge that we are not facilitating
          any sale or purchase within this proposed or pending project. This
          website is managed by a RERA authorized real estate agent named
          Propertypistol Realty Private Limited. The images shown on this
          website are for reference purposes only, and are not connected with
          the proposed project before the Authority; they may not accurately
          reflect the actual properties. Furthermore, we would like to
          acknowledge that we may share your data with Real Estate Regulatory
          Authority (RERA) registered Developers for polling and interest
          purposes. Additionally, we may send updates and information to the
          mobile number or email address registered with us regarding your
          interest. All rights reserved. The content, design, and information on
          this website are protected by copyright and other intellectual
          property rights. Any unauthorized use or reproduction of the content
          may violate applicable laws. Thank you for visiting our website.
        </p>

        {/* Policy and Copyright */}
        <div className="text-xs text-gray-700">
          <p>
            <a href="#" className="underline text-blue-600">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="underline text-blue-600">
              Terms & Conditions
            </a>
          </p>
          <p>All Rights Reserved. © 2025 Propertypistol Realty Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
