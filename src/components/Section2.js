import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import case1 from "../assets/images/case1.png";
import case2 from "../assets/images/case2.png";
import case3 from "../assets/images/case3.png";
import case4 from "../assets/images/case4.png";
import case5 from "../assets/images/case5.png";
import { Parallax } from "react-scroll-parallax";
import { Helmet } from "react-helmet";

const Section2 = ({ issDarkMode, caseStudyRef, caseStudyWrapper }) => {
  const scrollRef = useRef();
  // const sectionPosition = 1900;

  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   console.log(offsetY, "offsetY");
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [offsetY]);

  const [hover, sethover] = useState(null);
  const toggleHover = (idx) => {
    sethover(idx);
  };

  const [entered, setEntered] = useState(false);
  const [progress, setProgress] = useState();
  console.log(entered, progress, "entered");

  // if (entered) {
  //   scrollRef.current.scrollLeft = 1000;
  // }

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
      title: "Luxistt",
      text: "Serenity away from home in apartments",
      url: "/luxistt",
      bg: case4,
    },
    {
      title: "Cubana group",
      text: "Palatial ecstatic hospitality brand",
      url: "/cubana-group",
      bg: case5,
    },
  ];
  return (
    <div
      className="section2"
      ref={scrollRef}
      style={{ overflowY: entered && "hidden" }}
    >
      {/* <Helmet>
        <style>{`body{overflow-y : ${entered ? "hidden" : "scroll"}; 
        }`}</style>
      </Helmet> */}
      {/* style={{ position: entered ? "fixed" : "" }} */}
      <div ref={caseStudyRef}>
        {section2Data.map((item, idx) => (
          <div
            key={idx}
            className={`${!issDarkMode && "light_mode"}`}
            style={{ backgroundImage: hover === idx ? `url(${item.bg})` : "" }}
            onMouseEnter={() => toggleHover(idx)}
            onMouseLeave={() => toggleHover(null)}
          >
            <div style={{ borderColor: issDarkMode ? "white" : "black" }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to={item.url}>View case study</Link>
              <span ref={caseStudyWrapper}></span>
            </div>
          </div>
        ))}
      </div>
      <Parallax
        onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
      />
    </div>
  );
};

export default Section2;
