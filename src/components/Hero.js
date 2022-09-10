import React, { useState } from "react";
import { Logo } from "../components/Icons";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";

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
        <Logo color={issDarkMode ? "white" : "black"} />
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
        <div className="hero_image">
          <div>
            <img src={image1} alt="" />
            <a href="#"></a>
          </div>
          <div>
            <img src={image2} alt="" />
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
