import React, { useState } from "react";
import { Link } from "react-router-dom";

const Section2Card = ({
  idx,
  issDarkMode,
  title,
  text,
  url,
  bg,
  viewRef,
  activeBg,
}) => {
  const [hover, sethover] = useState(false);
  const toggleHover = (val) => {
    sethover(val);
  };

  return (
    <div
      key={idx}
      className={`card ${!issDarkMode && "light_mode"} ${
        activeBg === idx && "light_mode_hover"
      }`}
      style={{
        backgroundImage:
          hover === true ? `url(${bg})` : activeBg === idx && `url(${bg})`,
      }}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div
        style={{ borderColor: issDarkMode ? "white" : "black" }}
        className="beforeWrap"
      >
        <div className="wrap">
          <h3 className={` ${idx === 2 && "nox"}`}>{title}</h3>
          <p>{text}</p>
          <Link to={url}>View case study</Link>
        </div>

        <div ref={viewRef}></div>
      </div>
    </div>
  );
};

export default Section2Card;
