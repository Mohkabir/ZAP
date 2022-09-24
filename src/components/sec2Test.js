import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import case1 from "../assets/images/case1.png";
import case2 from "../assets/images/case2.png";
import case3 from "../assets/images/case3.png";
import case4 from "../assets/images/case4.png";
import case5 from "../assets/images/case5.png";
import { useIsInViewport } from "../helpers/index";
import Section2Card from "./Section2Card";

const Section2 = ({
  issDarkMode,
  offsetY,
  check,
  beforeStickyRef,
  containerRef,
}) => {
  const isInViewport1 = useIsInViewport(check);
  const scrollRef = useRef();

  // const [activeBg, setactiveBg] = useState(1, 2, 3, 4, 5);

  const refs = useRef([]);
  const currentRef = useRef();

  const isInViewport2 = useIsInViewport(currentRef);

  useEffect(() => {
    if (isInViewport2 === true) {
    }
  }, [offsetY]);

  useEffect(() => {
    if (isInViewport1 === true) {
      let xAxisToScroll = offsetY - containerRef.current.offsetTop;
      scrollRef.current.scrollLeft = xAxisToScroll;
    }
  }, [offsetY]);

  const [hover, sethover] = useState(null);
  const toggleHover = (idx) => {
    sethover(idx);
  };

  const section2Data = [
    {
      title: "Forric",
      text: "High quality ICT solutions you can trust",
      url: "/forric",
      bg: case1,
    },
    {
      title: "Nox",
      text: "Exclusive indoor and outdoor lounge",
      url: "/nox",
      bg: case2,
    },
    {
      title: "Compoundcapital",
      text: "Deals financing platform for Africans powered by Syndicates.",
      url: "/compound-capital",
      bg: case3,
    },
    {
      title: "Cubana group",
      text: "Palatial ecstatic hospitality brand",
      url: "/cubana-group",
      bg: case4,
    },
    {
      title: "Luxistt",
      text: "Serenity away from home in apartments",
      url: "/luxistt",
      bg: case5,
    },
  ];

  return (
    <div className="section2 sticky" ref={scrollRef}>
      <div className="check4" ref={currentRef}>
        csfsfs
      </div>
      <div ref={beforeStickyRef} className="card_wrapper">
        {section2Data.map((item, idx) => (
          <div
            key={idx}
            className={`card ${!issDarkMode && "light_mode"}`}
            style={{ backgroundImage: hover === idx ? `url(${item.bg})` : "" }}
            onMouseEnter={() => toggleHover(idx)}
            onMouseLeave={() => toggleHover(null)}
          >
            <div
              style={{ borderColor: issDarkMode ? "white" : "black" }}
              className="beforeWrap"
            >
              <div className="wrap">
                <h3 className={` ${idx === 1 && "nox"}`}>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.url}>View case study</Link>
              </div>

              <div
                className="check4"
                id={idx}
                // ref={(currentRef) => (refs.current[idx] = currentRef)}
                // ref={currentRef}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
