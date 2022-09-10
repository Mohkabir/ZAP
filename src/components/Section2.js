import React, { useState, useRef, useEffect } from "react";
import images3 from "../assets/images/images3.png";

const Section2 = ({ offsetY, issDarkMode }) => {
  const scrollRef = useRef();
  const sectionPosition = 1900;
  //   useEffect(() => {
  //     if (offsetY > sectionPosition) {
  //       let xAxisToScroll = offsetY - sectionPosition;
  //       scrollRef.current.scrollLeft = xAxisToScroll;
  //     }
  //   }, [offsetY]);

  const [hover, sethover] = useState(null);
  const toggleHover = (idx) => {
    sethover(idx);
  };

  const section2Data = [
    {
      title: "Cubana Group",
      text: "Palatial ecstatic hospitality brand",
      url: "#",
      bg: images3,
    },
    {
      title: "Rewind",
      text: "Exclusive indoor and outdoor lounge",
      url: "#",
      bg: images3,
    },
    {
      title: "WaterRock",
      text: "Largest brick and stone tiles manufacturer",
      url: "#",
      bg: images3,
    },
    {
      title: "Luxistt",
      text: "Serenity away from home in apartments",
      url: "#",
      bg: images3,
    },
  ];
  return (
    <div className="section2" ref={scrollRef}>
      <div>
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
              <a href={item.url}>View case study</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
