import React, { useEffect } from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import { ZeroOne } from "../components/Icons";
import hero from "../assets/images/forric_hero.png";
import forric_image1 from "../assets/images/forric_image1.png";
import forric_image2 from "../assets/images/forric_image2.png";
import forric_image3 from "../assets/images/forric_image3.png";
import forric_image4 from "../assets/images/forric_image4.png";
import forric_image5 from "../assets/images/forric_image5.png";
import forric_image6 from "../assets/images/forric_image6.png";
import forric_image7 from "../assets/images/forric_image7.png";
import forric_image8 from "../assets/images/forric_image8.png";
import forric_image9 from "../assets/images/forric_image9.png";
import forric_image10 from "../assets/images/forric_image10.png";

import { scrollTop } from "../helpers";

import "../scss/forric.scss";

const Forric = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="forrics">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Forric"
        heading="High quality ICT solutions you can trust"
      />
      <div className="forricHero">
        <img src={hero} alt="" />
      </div>
      <div className="forricsContents">
        <div className="foricsText">
          <h3>Forric</h3>
          <p>
            A brand that provides technical support in all technology driven
            projects and products while also managing/service Web design, app
            design and so much more.
          </p>
          <p>
            Understanding this, we birthed this logo which is a combination of a
            triangle representing stability and the infinity sign representing
            limitless continuity of the brand and its expertise.
          </p>
        </div>
        <div className="img_wrapper">
          <img src={forric_image1} alt="forrics image" />
          <img src={forric_image2} alt="forrics image" />
          <div className="img_flex">
            <img src={forric_image3} alt="forrics image" />
            <img src={forric_image4} alt="forrics image" />
          </div>
          <div className="img_flex">
            <img src={forric_image5} alt="forrics image" />
            <img src={forric_image6} alt="forrics image" />
          </div>
          <div className="img_flex">
            <img src={forric_image7} alt="forrics image" />
            <img src={forric_image8} alt="forrics image" />
          </div>

          <img src={forric_image9} alt="forrics image" />
          <img src={forric_image10} alt="forrics image" />
        </div>

        <div className="foricsText ourgoal">
          <h3>Our goal</h3>
          <p>
            We presented Forric as a professional brand. This wired our focus
            into designing Forric's visual brand identity with a distinct logo,
            colour scheme and typography.
          </p>
          <p>
            With this properly curated content, Forric was launched into the
            market and prepared for its budding chapter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forric;
