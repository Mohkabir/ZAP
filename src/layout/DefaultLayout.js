import React, { useState } from "react";

const DefaultLayout = ({ children, issDarkMode }) => {
  return <div className="layout">{children}</div>;
};

export default DefaultLayout;
