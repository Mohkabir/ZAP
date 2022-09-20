import React from 'react'
import CaseStudyHero from "../components/CaseStudyHero";

const Forric = ({ themeToggle, issDarkMode }) => {
  return (
    <div>
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Forrics"
        // heading="Welcome to the Night"
        // heading2="is the tag line for this holistic brand"
      />
    </div>
  );
};

export default Forric