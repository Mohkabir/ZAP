import React, { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

import Brands from "../components/Brands";
import Hero from "../components/Hero";
import { ShortArrowRight } from "../components/Icons";
import OurTeam from "../components/OurTeam";
import Section2 from "../components/Section2";
import singleImage1 from "../assets/images/singleImage1.png";
import Section6 from "../components/Section6";
import "../scss/landing.scss";

const CaseOne = ({ themeToggle, issDarkMode }) => {
  const formKey = "xvoykerw";
  const [state, handleSubmit] = useForm(formKey);

  const [offsetY, setOffsetY] = useState(0);
  const defaultWidth = 700
  const [imgWidth, setimgWidth] = useState(defaultWidth);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
    console.log(window.pageYOffset, "offsetY");

    if (window.pageYOffset > 4300) {
      setimgWidth(window.pageYOffset + defaultWidth - 4300);
      console.log(window.pageYOffset + defaultWidth - 4300, "yeahhh");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Hero themeToggle={themeToggle} issDarkMode={issDarkMode} />
      <div className="beforeSticky">
        <div className="sticky">
          <Section2 offsetY={offsetY} issDarkMode={issDarkMode} />
        </div>
      </div>
      <div className="section1">
        <h2>
          We work close with our clients and help them find their natural voice
          through strong visual communication - working from the big ambition to
          the smallest <span className="primary_text">design</span> detail.
        </h2>
      </div>
      <Brands issDarkMode={issDarkMode} />

      <div className="beforeSticky2">
        <div className="sticky">
          <Section6 offsetY={offsetY} issDarkMode={issDarkMode}  />
        </div>
      </div>

      <div className="wrapper singleImage">
        <img src={singleImage1} alt="" style={{ width: `${imgWidth}px` }} />
      </div>
      <OurTeam issDarkMode={issDarkMode} />
      <div className="section7 wrapper">
        <h2>
          This is the part where you get in touch and we make amazing things
          happen.
        </h2>

        <p className="alert" style={{ color: "red" }}>
          {!state.submitting && state?.errors?.length
            ? "Error: Please Try again"
            : ""}
        </p>
        <p className="alert" style={{ color: "green" }}>
          {!state.submitting && state?.succeeded ? "Submited Successfully" : ""}
        </p>
        <form
          onSubmit={handleSubmit}
          className={`${issDarkMode ? "inputDark" : "inputLight"}`}
        >
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
          />
          <button
            className={`submit ${state.submitting && "loader"}`}
            type="submit"
          >
            <ShortArrowRight color={issDarkMode ? "white" : "black"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CaseOne;
