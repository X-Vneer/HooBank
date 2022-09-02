import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Status from "./components/Status";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import Clinets from "./components/Clients";
import CTA from "./components/CTA";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full z-50">
        <div className="container">
          <NavBar />
        </div>
      </div>
      <div className="bg-primary w-full hero ">
        <div className="container">
          <Hero />
          <Status />
        </div>
      </div>
      <div className="bg-primary w-full  overflow-hidden">
        <div className="container">
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clinets />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
