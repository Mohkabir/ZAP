import React from "react";
import { Approved, NoxLog2, NoxLog3, ZeroTwo } from "./Icons";
import Nox1 from "../assets/images/noxImage1.png";
import Nox2 from "../assets/images/noxImage2.png";
import Nox3 from "../assets/images/noxImage3.png";
import Nox4 from "../assets/images/noxImage4.png";

const NoxSection2 = ({ issDarkMode }) => {
  const color = issDarkMode ? "white" : "black";
  return (
    <div className="noxSection2">
      <div>
        <p>Style 2</p>
        <div className="head">
          <NoxLog2 color={color} />
        </div>
        <div className="img_wrapper">
          <img src={Nox1} alt="" />
          <img src={Nox2} alt="" />
        </div>
        <div className="text">
          <p>
            Nox, the Roman goddess of night was always all cloaked in a dark
            veil. History has it that the black veil was used by the goddess to
            cover the sky and sun, thereby turning it to night. The "O" icon is
            the sun turned moon covered in the veil of Nox. Also in reference to
            the Roman War outfits, the "O" icon comes together to represent the
            disc brooch used to hold their Sagum together.
          </p>
        </div>
      </div>
      <div>
        <p className="head3">Style 3</p>
        <div className="head3Logo">
          <NoxLog3 color={"white"} />
        </div>
        <div className="nox3_4 ">
          <img src={Nox3} alt="" />
          <img src={Nox4} alt="" />
        </div>
        <div className="text">
          <p>
            Nox, as a Latin word, has its history in ancient Rome which are
            popularly known for their dominant empire and war outfits. Their war
            helmets, also called the 'Galea', is represented in the letter "N"
          </p>
        </div>
      </div>

      <div className="approved">
        <Approved color={color} />
      </div>
    </div>
  );
};

export default NoxSection2;
