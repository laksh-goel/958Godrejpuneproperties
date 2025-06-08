import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Details from "./components/PricingSlider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PricingSlider from './components/PricingSlider';
import PlanSection from './components/PlanSection';
import AmenitiesSlider from './components/AmenitiesSlider';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import Developer from './components/Developer';
import ScheduleVisit from './components/ScheduleVisit';
import Footer from './components/Footer';
import InfoCard from './components/Infocard';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Header and InfoCard */}
      <div className="relative">
        <Header />
        <div className="block md:absolute md:top-20 md:left-[1%] md:transform md:-translate-x-[1%] md:z-10 w-full md:w-1/2 px-4">
          <InfoCard />
        </div>
      </div>

    <div className="hidden md:block fixed top-0 right-0 w-[350px] h-screen overflow-y-auto bg-white shadow-lg z-40">
      <div className="pt-16 p-4"> {/* This padding offsets the navbar height */}
        <ContactForm />
      </div>
    </div>

      {/* Main Content - add margin to avoid overlap */}
      <main className="md:mr-[370px] px-4 md:px-8 mt-10">
        <AboutUs />
        <PricingSlider />
        <PlanSection />
        <AmenitiesSlider />
        <Gallery />
        <LocationSection />
        <Developer />
        <ScheduleVisit />
        <Footer />
      </main>
    </div>
  );
};

export default App;