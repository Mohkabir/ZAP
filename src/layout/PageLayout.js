import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { scrollTop } from "../helpers";

const PageLayout = ({ children, issDarkMode, footerColour }) => {
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    scrollTop();
  }, []);

  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <div className="layout">
      <div>{children}</div>
      <Footer issDarkMode={issDarkMode} footerColour={footerColour} />
    </div>
  );
};

export default PageLayout;
