import React from "react";
import altschool from "../assets/images/altschool.svg";
import betnaija from "../assets/images/betnaija.svg";
import talentql from "../assets/images/talentql.svg";
import aero from "../assets/images/aero.svg";
import uba from "../assets/images/uba.svg";
import barter from "../assets/images/barter.svg";
import flutterwave from "../assets/images/flutterwave.svg";
import opera from "../assets/images/opera.svg";
import betway from "../assets/images/betway.svg";
import konga from "../assets/images/konga.svg";
import relianceHmo from "../assets/images/relianceHmo.svg";
import peak from "../assets/images/peak.svg";

const Brands = () => {
  const brands = [
    {
      image: altschool,
    },
    {
      image: betnaija,
    },
    {
      image: talentql,
    },
    {
      image: aero,
    },
    {
      image: uba,
    },
    {
      image: barter,
    },
    {
      image: flutterwave,
    },
    {
      image: opera,
    },
    {
      image: betway,
    },
    {
      image: konga,
    },
    {
      image: relianceHmo,
    },
    {
      image: peak,
    },
  ];
  return (
    <div className="brands">
      {brands.map((brand, idx) => (
        <div key={idx}>
          <img src={brand.image} alt="brands image" />
        </div>
      ))}
    </div>
  );
};

export default Brands;
