import React from "react";
import {
  Aero,
  Altschool,
  Barter,
  Betnaija,
  Betway,
  Flutterwave,
  Konga,
  Opera,
  Peak,
  RelianceHmo,
  Talentql,
  Uba,
} from "./Icons";

const Brands = ({ issDarkMode }) => {
  const color = issDarkMode ? "white" : "black";
  return (
    <div className="brands">
      <div>
        <Altschool color={color} />
      </div>
      <div>
        <Betnaija color={color} />
      </div>
      <div>
        <Talentql color={color} />
      </div>
      <div>
        <Aero color={color} />
      </div>
      <div>
        <Uba color={color} />
      </div>
      <div>
        <Barter color={color} />
      </div>
      <div>
        <Flutterwave color={color} />
      </div>
      <div>
        <Opera color={color} />
      </div>
      <div>
        <Betway color={color} />
      </div>
      <div>
        <Konga color={color} />
      </div>
      <div>
        <RelianceHmo color={color} />
      </div>
      <div>
        <Peak color={color} issDarkMode={issDarkMode} />
      </div>
    </div>
  );
};

export default Brands;
