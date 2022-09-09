import React, { useState } from "react";
import { Logo } from "../components/Icons";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";

const Hero = () => {
  const [issDarkMode, setIssDarkMode] = useState(true);

  return (
    <div>
      <div className="head wrapper">
        <Logo />
        <div
          className="darkToggle"
          style={{ justifyContent: issDarkMode ? "flex-start" : "flex-end" }}
          onClick={() => setIssDarkMode(!issDarkMode)}
        >
          <span></span>
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
