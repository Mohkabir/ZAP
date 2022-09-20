import React from "react";
import CaseStudyHero from "../components/CaseStudyHero";

const CubanaGroup = ({ themeToggle, issDarkMode }) => {
  return (
    <div>
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Cubana groups"
        // heading="Welcome to the Night"
        // heading2="is the tag line for this holistic brand"
      />
    </div>
  );
};

export default CubanaGroup;
