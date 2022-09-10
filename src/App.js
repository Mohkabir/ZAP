import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Helmet } from "react-helmet";

function App() {
  // const [theme, setTheme] = useState(true);

  const [issDarkMode, setIssDarkMode] = useState(true);

  const themeToggle = () => {
    setIssDarkMode(!issDarkMode);
  };
  console.log(issDarkMode, "issDarkMode");
  return (
    <div className="global_container">
      <Helmet>
        <style>{`body{background : ${issDarkMode ? "black" : "white"}; color: ${
          issDarkMode ? "white" : "black"
        }}`}</style>
      </Helmet>
      <LandingPage themeToggle={themeToggle} issDarkMode={issDarkMode} />
    </div>
  );
}

export default App;
