import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Icons";
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
      <div className="wrap">
        <div className="head wrapper logo">
          <Link to="/">
            <Logo color={issDarkMode ? "white" : "black"} />
          </Link>
        </div>
        <div className="hero_contents case_hero_contents">
          <div
            className="wrap_text"
            style={{ background: issDarkMode ? "black":"white"  }}
          >
            <span>Cubana group -</span>
            <h1>Palatial ecstatic hospitality brand</h1>
          </div>
        </div>
      </div>
      <div className="hero_image">
        <img src={cubana_img} alt="" />
      </div>

      <div className="cubanaHero">
        <p>Coming soon</p>
      </div>
      <div className="cubanaContents"></div>
    </div>
  );
};

export default CubanaGroup;
