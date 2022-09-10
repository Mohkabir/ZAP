import React, { useState, useEffect } from "react";
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

const LandingPage = ({ themeToggle, issDarkMode }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Hero themeToggle={themeToggle} issDarkMode={issDarkMode} />
      <div className="section1">
        <h2>
          We work close with our clients and help them find their natural voice
          through strong visual communication - working from the big ambition to
          the smallest <span className="primary_text">design</span> detail.
        </h2>
      </div>
      <Section2 offsetY={offsetY} issDarkMode={issDarkMode} />
      <Brands issDarkMode={issDarkMode} />
      <BrandsDetails />
      <Section5 />
     
      
      <Section6 offsetY={offsetY} />
      <OurTeam />
      <div className="section7 wrapper">
        <h2>
          This is the part where you get in touch and we make amazing things
          happen
        </h2>
        <div className={`${issDarkMode ? "inputDark" : "inputLight"}`}>
          <input type="text" placeholder="your@email.com" />
          <div className="submit">
            <ShortArrowRight color={issDarkMode ? "white" : "black"} />
          </div>
        </div>
      </div>
      <Footer issDarkMode={issDarkMode} />
    </div>
  );
};

export default LandingPage;
