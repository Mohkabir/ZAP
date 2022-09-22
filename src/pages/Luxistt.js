import React, { useEffect } from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import { ZeroOne } from "../components/Icons";
// import hero from "../assets/images/forric_hero.png";
import luxistt_image from "../assets/images/luxistt_image.png";

import { scrollTop } from "../helpers";

import "../scss/luxistt.scss";

const Luxistt = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="luxistt">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Luxistt"
        heading={`Offering you a comfortable and luxurious stay`}
        bg="white"
        color="black"
      />
      <div className="luxisttHero">
        <img src={luxistt_image} alt="" />
      </div>
      <div className="luxisttsContents"></div>
    </div>
  );
};

export default Luxistt;
