import React, { useState } from "react";
import {
  Menu,
  Home,
  IndianRupee, // ✅ Replace DollarSign with IndianRupee
  Layout,
  Building,
  Image,
  MapPin,
  Download,
} from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconProps = {
    size: 20,
    className:
      "filter grayscale opacity-70 group-hover:opacity-100 transition duration-300",
  };

  const links = [
    { name: "Home", icon: <Home {...iconProps} /> },
    { name: "Proposed Price", icon: <IndianRupee {...iconProps} /> }, // ✅ Changed here
    { name: "Proposed Site Plan", icon: <Layout {...iconProps} /> },
    { name: "Proposed Amenities", icon: <Building {...iconProps} /> },
    { name: "Gallery", icon: <Image {...iconProps} /> },
    { name: "Location", icon: <MapPin {...iconProps} /> },
    {
      name: "Brochure",
      icon: (
        <Download
          size={20}
          className="text-black animate-bounce-faster"
        />
      ),
      href: "/path-to-brochure.pdf",
      download: true,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full py-3 px-8">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3 -ml-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          <ul className="hidden md:flex gap-8 items-center text-base font-medium">
            {links.map((link) => (
              <li key={link.name}>
                {link.download ? (
                  <a
                    href={link.href}
                    download
                    className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <a
                    href={`#${link.name.replace(/\s+/g, "-").toLowerCase()}`}
                    className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              <Menu size={36} />
            </button>
          </div>

          <div>{/* Enquire Now placeholder */}</div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-sm px-6 pb-4">
          <ul className="flex flex-col items-center text-base font-medium">
            {links.map((link) => (
              <li
                key={link.name}
                className="py-3 border-b last:border-b-0 w-full text-center"
              >
                {link.download ? (
                  <a
                    href={link.href}
                    download
                    className="group inline-flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <a
                    href={`#${link.name.replace(/\s+/g, "-").toLowerCase()}`}
                    className="group inline-flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
