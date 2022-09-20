import React from "react";
import CaseStudyHero from "../components/CaseStudyHero";


const Luxistt = ({ themeToggle, issDarkMode }) => {
  return (
    <div>
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Luxistt
s"
        // heading="Welcome to the Night"
        // heading2="is the tag line for this holistic brand"
      />
    </div>
  );
};

export default Luxistt;
