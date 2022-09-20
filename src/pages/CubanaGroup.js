import React, { useEffect } from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import cubana_img from "../assets/images/cubana_img.png";

import { scrollTop } from "../helpers";

import "../scss/cubanaGroup.scss";

const CubanaGroup = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="cubana">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Cubana group"
        heading="Palatial ecstatic hospitality brand"
   
      />
      <div className="cubanaHero">
        <img src={cubana_img} alt="" />
        <p>Coming soon</p>
      </div>
      <div className="cubanaContents"></div>
    </div>
  );
};

export default CubanaGroup;
