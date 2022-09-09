import React, { useState } from "react";
import images3 from "../assets/images/images3.png";

const Section2 = () => {
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
    <div className="section2">
      {section2Data.map((item, idx) => (
        <div
          key={idx}
          style={{ backgroundImage: hover === idx ? `url(${item.bg})` : "" }}
          onMouseEnter={() => toggleHover(idx)}
          onMouseLeave={() => toggleHover(null)}
        >
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.url}>View case study</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
