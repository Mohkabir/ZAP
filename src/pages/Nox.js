import React, { useEffect } from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import { ZeroOne } from "../components/Icons";
import NoxSection1 from "../components/NoxSection1";
import NoxSection2 from "../components/NoxSection2";
import NoxSection3 from "../components/NoxSection3";
import { scrollTop } from "../helpers";

import "../scss/nox.scss";

const Nox = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="nox">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Nox"
        heading="Welcome to the Night"
        heading2="is the tag line for this holistic brand"
      />
      <div className="noxhero">
        <span>01</span>
      </div>
      <NoxSection1 />
      <NoxSection2 />
      <NoxSection3 />
      <div className="result">
        <div>
          <h2>The result</h2>
          <p>
            We successfully managed to define a new brand, visual identity,
            illustration style and message.
          </p>
          <p>
            Big thanks to the Nox team, for providing incredible insight,
            guiding us through our collaboration, and trusting Zap Expression to
            deliver a new identity for Nox.
          </p>
          <h3>We create together</h3>
          <p>
            We are a branding digital studio helping businesses attain optimum
            standard through brand development, strategy and communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nox;
