import React from "react";
import { NoxLog, NoxLog1, NoxOne, NoxThree, NoxTwo, RightCaret } from "./Icons";

const NoxSection1 = ({ issDarkMode }) => {
  const color = issDarkMode ? "white" : "black";

  return (
    <div className="noxSection1">
      <p className="half_text">
        This is a compilation of logo Ideas for the Nox brand. Preferred/chosen
        design concept would be further developed and implemented into the final
        brand identity for Nox.
      </p>
      <p className="style">style 1</p>
      <div className="box1">
        <span>
          <NoxOne color={color} />
        </span>
        <span>
          <RightCaret color={color} />
        </span>
        <span>
          <NoxThree color={color} />
        </span>
        <span>
          <RightCaret color={color} />
        </span>
        <span>
          <NoxTwo color={color} />
        </span>
      </div>
      <div className="box2">
        <p>
          <NoxLog color={color} />
        </p>
        <p>
          <NoxLog1 color={color} />
        </p>
        <p>
          The letters of the logo are formed from a combination of both a{" "}
          <strong>full moon</strong> and a <strong>half moon</strong>. The moon
          is a natural symbol of night time. The bar at the top of the{" "}
          <strong>"ō"</strong> is the macron placed when transcribing the letter
          "ō" in Latin.
          <strong>
            We gave it a clean cut for the modern feel while the rough looking
            one brings the ancient roots of the Medieval times of Rome
          </strong>
          .
        </p>
      </div>
    </div>
  );
};

export default NoxSection1;
