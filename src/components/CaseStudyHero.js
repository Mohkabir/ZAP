import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Icons";

const CaseStudyHero = ({
  themeToggle,
  issDarkMode,
  title,
  heading,
  heading2,
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
    <div className="caseStudyHero">
      <div className="head wrapper">
        <Link to="/">
          <Logo color={issDarkMode ? "white" : "black"} />
        </Link>

        <div
          className="darkToggle"
          style={issDarkMode ? dark : light}
          onClick={themeToggle}
        >
          <span style={{ background: issDarkMode ? "white" : "black" }}></span>
        </div>
      </div>
      <div className="hero_contents">
        <div className="wrap_text">
          <span>{title} -</span>
          <h1>
            {heading} <span style={{ color: "#111111" }}>{heading2}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
