import React, { useState } from "react";
import image1 from "../assets/images/profile1.png";
import image2 from "../assets/images/profile2.png";
import image3 from "../assets/images/profile3.png";

import image4 from "../assets/images/profile4.png";
import image5 from "../assets/images/profile5.png";
import image6 from "../assets/images/profile6.png";

const OurTeam = ({ issDarkMode }) => {
  const [hover, sethover] = useState(null);
  const toggleHover = (idx) => {
    sethover(idx);
  };

  const datas = [
    {
      name: "Nkenna Emehelu",
      title: "Founder",
      profile: image1,
    },
    {
      name: "Kingsley Ukeje",
      title: "Head of Product",
      profile: image2,
    },
    {
      name: "Chidinma Ogbonnaya",
      title: "Head of Operations",
      profile: image3,
    },
    {
      name: "Onochie Emehelu",
      title: "Director of Photography",
      profile: image4,
    },
    {
      name: "Phillas Ngwudike",
      title: "Visual Design",
      profile: image5,
    },

    {
      name: "Edwin Agbilibeazu",
      title: "Researcher/Visual Design",
      profile: image6,
    },
  ];
  return (
    <div className="wrapper our_team">
      <h2>
        We are a team of young professionals who have coalesced into leveraging
        cutting-edge solutions to deliver value to our clients.
      </h2>

      <div className="card_wrapper">
        {datas.map((data, idx) => (
          <div
            key={idx}
            onMouseEnter={() => toggleHover(idx)}
            onMouseLeave={() => toggleHover(null)}
          >
            <div>
              <img src={data.profile} alt="" />
            </div>
            <div
              className={`unhovered ${hover === idx ? "hovered" : ""} ${
                !issDarkMode && "thumbnail_Light"
              }`}
            >
              <h3>{data.name}</h3>
              <p>{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
