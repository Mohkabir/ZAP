import React from "react";
import Brands from "../components/Brands";
import BrandsDetails from "../components/BrandsDetails";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { ShortArrowRight } from "../components/Icons";
import OurTeam from "../components/OurTeam";
import Section2 from "../components/Section2";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import "../scss/landing.scss";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div className="section1">
        <h2>
          We work close with our clients and help them find their natural voice
          through strong visual communication - working from the big ambition to
          the smallest <span className="primary_text">design</span> detail.
        </h2>
      </div>
      <Section2 />
      <Brands />
      <BrandsDetails />
      <Section5 />
      <Section6 />
      <OurTeam />

      <div className="section7 wrapper">
        <h2>
          This is the part where you get in touch and we make amazing things
          happen
        </h2>
        <div>
          <input type="text" placeholder="your@email.com" />
          <div className="submit">
            <ShortArrowRight color="white" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
