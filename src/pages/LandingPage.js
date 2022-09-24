import React, { useState, useEffect, useRef, useMemo } from "react";
import { useForm } from "@formspree/react";
import Brands from "../components/Brands";
import Hero from "../components/Hero";
import { ShortArrowRight } from "../components/Icons";
import OurTeam from "../components/OurTeam";
import Section2 from "../components/Section2";
import singleImage1 from "../assets/images/singleImage1.png";
import Section6 from "../components/Section6";
import "../scss/landing.scss";
import {
  calculateHeight,
  CheckDeviceScreen,
  useIsInViewport,
  useScrollDirection,
} from "../helpers";

const CaseOne = ({ themeToggle, issDarkMode }) => {
  const formKey = "xvoykerw";
  const [state, handleSubmit] = useForm(formKey);

  const check = useRef(null);
  const check2 = useRef(null);
  const check3 = useRef(null);
  const beforeStickyRef = useRef(null);
  const beforeStickyRef2 = useRef(null);
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  const [offsetY, setOffsetY] = useState(0);

  const defaultWidth = 50;
  const [imgWidth, setimgWidth] = useState(defaultWidth);
  const [offsetYAfterView, setOffsetYAfterView] = useState(0);

  const scrollDirection = useScrollDirection();
  const isInViewport1 = useIsInViewport(check3);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    if (isInViewport1 === true) {
      if (scrollDirection === "up") {
        setOffsetYAfterView(offsetYAfterView - 1);
      } else {
        setOffsetYAfterView(offsetYAfterView + 1);
      }
      setimgWidth(offsetYAfterView + defaultWidth);
    }
  }, [offsetY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Hero themeToggle={themeToggle} issDarkMode={issDarkMode} />
      <div
        className="beforeSticky mobile"
        style={{
          height: "initial",
        }}
        ref={containerRef}
      >
        <div className="sticky">
          <Section2
            offsetY={offsetY}
            issDarkMode={issDarkMode}
            check={check}
            beforeStickyRef={beforeStickyRef}
            containerRef={containerRef}
          />
          <div ref={check}></div>
        </div>
      </div>
      <div
        className="beforeSticky desktop"
        style={{
          height: calculateHeight(beforeStickyRef),
        }}
        ref={containerRef}
      >
        <div className="sticky">
          <Section2
            offsetY={offsetY}
            issDarkMode={issDarkMode}
            check={check}
            beforeStickyRef={beforeStickyRef}
            containerRef={containerRef}
          />
          <div ref={check}></div>
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

      <div
        className="beforeSticky2"
        style={{
          height: calculateHeight(
            beforeStickyRef2,
            window.innerHeight < 1242
              ? window.innerHeight
              : window.innerHeight / 2
          ),
        }}
        ref={containerRef2}
      >
        <div className="sticky">
          <Section6
            offsetY={offsetY}
            issDarkMode={issDarkMode}
            check2={check2}
            beforeStickyRef2={beforeStickyRef2}
            containerRef2={containerRef2}
          />
          <div ref={check2}></div>
        </div>
      </div>

      <div className="wrapper singleImage">
        <div ref={check3} className="viewPort"></div>
        <img src={singleImage1} alt="" style={{ width: `${imgWidth}%` }} />
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
