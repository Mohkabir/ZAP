import React, { useState, useEffect, useRef } from "react";
import { useParallax } from "react-scroll-parallax";

import Brands from "../components/Brands";
// import BrandsDetails from "../components/BrandsDetails";
import Hero from "../components/Hero";
import { ShortArrowRight } from "../components/Icons";
import OurTeam from "../components/OurTeam";
import Section2 from "../components/Section2";
import singleImage1 from "../assets/images/singleImage1.png";
import Section6 from "../components/Section6";
import "../scss/landing.scss";

const CaseOne = ({ themeToggle, issDarkMode }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const caseStudyWrapper = useRef(null);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const caseStudy = useParallax({
    ref: caseStudyWrapper,
    easing: [1, -0.75, 0.5, 1.34],
    // translateX: [-5, -60],
    controller: null,
    element: Element | undefined,
  });

  return (
    <div>
      <Hero themeToggle={themeToggle} issDarkMode={issDarkMode} />
      <div>
        <Section2
          offsetY={offsetY}
          issDarkMode={issDarkMode}
          caseStudyRef={caseStudy.ref}
          targetRef={caseStudyWrapper}
        />
      </div>
      <div className="section1">
        <h2>
          We work close with our clients and help them find their natural voice
          through strong visual communication - working from the big ambition to
          the smallest <span className="primary_text">design</span> detail.
        </h2>
      </div>
      <Brands issDarkMode={issDarkMode} />
      <Section6 offsetY={offsetY} />
      <div className="wrapper singleImage">
        <img src={singleImage1} alt="" />
      </div>
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
    </div>
  );
};

export default CaseOne;
