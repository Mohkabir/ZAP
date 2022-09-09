import React from "react";
import { FullLogo } from "./Icons";

const Footer = () => {
  return (
    <footer className="wrapper">
      <div>
        <FullLogo />
      </div>
      <div>
        <span>
          31 Old airport road by <br /> Thinkers Corner Emene <br /> Industrial
          Layout, <br /> Thinkers Corner, Enugu
        </span>
      </div>
      <div>
        <a href="">Instagram</a>
        <a href="">LinkedIn</a>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Youtube</a>
      </div>
      <div>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
