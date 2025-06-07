// src/App.jsx
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
      <div className="min-h-screen flex flex-col">
           <Header />
        </div>
        <div
        className="flex-grow bg-cover bg-center flex items-start justify-start p-8"
   
      >
        <InfoCard />
      </div>
      <main>
        <ContactForm/>
        <AboutUs />
        <PricingSlider />
        <PlanSection/>
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

export default App;
