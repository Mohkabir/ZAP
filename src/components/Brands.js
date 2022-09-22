import React from "react";
import {
  Aero,
  Lenece,
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
  Cubana,
  CompoundCapital,
  VillageBistre,
  Trube,
  HazonTech,
  LuxyryPlace,
  Genesys,
  Forric,
  Newisst,
  Medvue,
  Nox,
} from "./Icons";

const Brands = ({ issDarkMode }) => {
  const color = issDarkMode ? "white" : "black";
  return (
    <div className="brands">
      <div>
        <Lenece color={color} />
      </div>
      <div>
        <Cubana color={color} />
      </div>
      <div>
        <CompoundCapital color={color} />
      </div>
      <div>
        <VillageBistre color={color} />
      </div>
      <div>
        <Trube color={color} />
      </div>
      <div>
        <Nox color={color} />
      </div>
      <div>
        <HazonTech color={color} />
      </div>
      <div>
        <LuxyryPlace color={color} />
      </div>
      <div>
        <Genesys color={color} />
      </div>
      <div>
        <Forric color={color} />
      </div>

      <div>
        <Newisst color={color} />
      </div>
      <div>
        <Medvue color={color} />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Brands;
