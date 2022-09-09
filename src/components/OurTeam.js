import React from "react";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";

const OurTeam = () => {
  const datas = [
    {
      name: "Nkenna Emehelu",
      title: "Creative Director",
      profile: image8,
    },
    {
      name: "Phillas Ngwudike",
      title: "Design",
      profile: image9,
    },
    {
      name: "Chidinma Ogbonnaya",
      title: "Content",
      profile: image10,
    },
    {
      name: "Onochie Emehelu",
      title: "Cinematograher",
      profile: image11,
    },
    {
      name: "Kelechi Iheanacho",
      title: "Cinematograher",
      profile: image12,
    },{}
  ];
  return (
    <div className="wrapper our_team">
      <h1>
        Our Team<span className="primary_text">.</span>
      </h1>

      <div className="card_wrapper">
        {datas.map((data, idx) => (
          <div key={idx}>
            <div>
              <img src={data.profile} alt="" />
            </div>
            <h3>{data.name}</h3>
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
