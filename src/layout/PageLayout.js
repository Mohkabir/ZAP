import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const PageLayout = ({ children, issDarkMode }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <div className="layout">
      <div>{children}</div>
      <Footer issDarkMode={issDarkMode} />
    </div>
  );
};

export default PageLayout;
