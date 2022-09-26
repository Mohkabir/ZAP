import React from "react";
import { FullLogo } from "./Icons";
import { Link } from "react-router-dom";
const Footer = ({ issDarkMode, footerColour }) => {
  const moreStyle = {
    ...footerColour,
    borderColor: footerColour?.color,
  };
  return (
    <div className="footer" style={footerColour && moreStyle}>
      <footer className="wrapper">
        <div>
          <FullLogo
            color={
              footerColour?.color
                ? footerColour.color
                : issDarkMode
                ? "white"
                : "black"
            }
          />
        </div>
        <div>
          <span>
            31 Old airport road by <br /> Thinkers Corner Emene <br />{" "}
            Industrial Layout, <br /> Thinkers Corner, Enugu
            <p>‎+234 916 414 7181</p>
          </span>
        </div>
        <div className={`${issDarkMode ? "darkLink" : "lightLink"}`}>
          <a
            target="_blank"
            href="https://www.instagram.com/zap_expression/"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/zap-expression/"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/zapexpression?_rdc=1&_rdr"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Facebook
          </a>
          <a
            target="_blank"
            href="https://twitter.com/ZapExpression"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Twitter
          </a>
        </div>
        <div>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
