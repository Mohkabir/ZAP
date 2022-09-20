import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Icons";

const CaseStudyHero = ({
  themeToggle,
  issDarkMode,
  title,
  heading,
  heading2,
  bg,
  color,
}) => {
  const dark = {
    borderColor: "white",
    color: "white",
    justifyContent: "flex-start",
  };
  const light = {
    borderColor: "black",
    color: "black",
    justifyContent: "flex-end",
  };
  return (
    <div
      className="caseStudyHero"
      style={{ background: bg && bg, color: color && color }}
    >
      <div className="head wrapper">
        <Link to="/">
          <Logo color={color ? "black" : issDarkMode ? "white" : "black"} />
        </Link>

        {/* <div
          className="darkToggle"
          style={issDarkMode ? dark : light}
          onClick={themeToggle}
        >
          <span style={{ background: issDarkMode ? "white" : "black" }}></span>
        </div> */}
      </div>
      <div className="hero_contents case_hero_contents">
        <div className="wrap_text">
          <span>{title} -</span>
          <h1>
            {heading} <span style={{ color: "#292929" }}>{heading2}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
