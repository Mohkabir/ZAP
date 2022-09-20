import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Icons";

const Hero = ({ themeToggle, issDarkMode }) => {
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
    <div>
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
          <h1>
            We elevate <span className="primary_text">Brands</span> by provoking
            imaginations
          </h1>
          <p>
            We work closley with our clients to truly understand who they are,
            who they are speaking to, and what they want to say.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
