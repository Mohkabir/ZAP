import React, { useState, useEffect } from "react";
import "../scss/landing.scss";
import image1 from "../assets/images/home-image1.png";
import image2 from "../assets/images/home-image2.png";
import image3 from "../assets/images/home-image3.png";
import { Link } from "react-router-dom";
import { Logo } from "../components/Icons";
const LandingPage = ({ themeToggle, issDarkMode }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero_image">
      <Logo color="white" />
      <div>
        <img src={image1} alt="" />
        <Link to="#"></Link>
      </div>
      <div>
        <img src={image2} alt="" />
        <Link to="#"></Link>
      </div>
      <div>
        <img src={image3} alt="" />
        <Link to="#"></Link>
      </div>
    </div>
  );
};

export default LandingPage;
