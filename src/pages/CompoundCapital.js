import React, { useEffect } from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import { ZeroOne } from "../components/Icons";
import bell_image from "../assets/images/bell_image.png";


import { scrollTop } from "../helpers";

import "../scss/compountd.scss";

const CompountCapital = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="compountd">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Compound capital"
        heading="Deals financing platform for Africans powered by Syndicates."
        bg="#759A3D"
      />
      <div className="compountdHero">
        <div>
          <p>Coming soon</p>
          <img src={bell_image} alt="" />
        </div>
      </div>
      <div className="compountdsContents"></div>
    </div>
  );
};

export default CompountCapital;
