import React from "react";
import { FullLogo } from "./Icons";

const Footer = ({ issDarkMode, footerColour }) => {
  return (
    <div className="footer" style={footerColour && footerColour}>
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
          </span>
        </div>
        <div className={`${issDarkMode ? "darkLink" : "lightLink"}`}>
          <a
            href=""
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Instagram
          </a>
          <a
            href=""
            style={{ color: footerColour?.color && footerColour.color }}
          >
            LinkedIn
          </a>
          <a
            href=""
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Facebook
          </a>
          <a
            href=""
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Twitter
          </a>
          <a
            href=""
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Youtube
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
