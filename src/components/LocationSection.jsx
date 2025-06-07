import React from "react";
import { motion } from "framer-motion";
import proposedMap from "../assets/location/proposed-map.webp";

export default function LocationSection() {
  return (
    <section className="py-12 px-4 md:px-12 bg-white relative overflow-hidden">
      {/* Heading with animation */}
      <motion.h2
        className="text-center text-3xl font-bold text-green-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Location Advantage
      </motion.h2>

      {/* Map and Proposed Map */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-24">
        {/* Google Map Embed */}
        <motion.div
          className="w-full md:w-1/2 rounded-[25px] overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Hinjewadi Phase 1 Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.476897317421!2d73.73293817513074!3d18.551458269134554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9204d8dbbdb%3A0x1652f5ad43d02c7f!2sHinjewadi%20Phase%201%2C%20Hinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717666669999!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Proposed Map Image */}
        <motion.div
          className="w-full md:w-1/2 relative rounded-[25px] overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105 h-[300px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={proposedMap}
            alt="Proposed Location Map"
            className="w-full h-full object-cover"
          />
          {/* Overlay text */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-white text-xl font-semibold tracking-wide">
              Proposed Location Map
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Button (Fixed at bottom center of section) */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        
      </motion.div>
      <div className="flex justify-center">
  <a
    href="#contact"
    className="text-sm font-semibold py-3 rounded-[25px] bg-green-800 text-white shadow-md hover:bg-green-900 mt-4 w-[220px] text-center"
  >
    Express Your Interest
  </a>
</div>
    </section>
  );
}
