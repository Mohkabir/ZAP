import React from "react";
import CaseStudyHero from "../components/CaseStudyHero";

const CompountCapital = ({ themeToggle, issDarkMode }) => {
  return (
    <div>
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Compount Capitals"
        // heading="Welcome to the Night"
        // heading2="is the tag line for this holistic brand"
      />
    </div>
  );
};

export default CompountCapital;
