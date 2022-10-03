import React, { useState, useEffect, useHistory } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { scrollTop } from "../helpers";

const PageLayout = ({
  children,
  issDarkMode,
  footerColour,
  setIssDarkMode,
}) => {
  const [menuStatus, setMenuStatus] = useState(false);
  // const location = useLocation();
//  const history = useHistory();
  useEffect(() => {
    scrollTop();
  }, []);

  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  // useEffect(() => {
  //   setIssDarkMode(true);
  //   console.log(location, "location");
  // }, [location]);

  // console.log(location, "location");

  return (
    <div className="layout">
      <div>{children}</div>
      <Footer issDarkMode={issDarkMode} footerColour={footerColour} />
    </div>
  );
};

export default PageLayout;
