import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Helmet } from "react-helmet";
import { Logo } from "./components/Icons";

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [issDarkMode, setIssDarkMode] = useState(true);
  const themeToggle = () => {
    setIssDarkMode(!issDarkMode);
  };

  if (loading) {
    return (
      <div className="loadingEffect">
        <div>
          <Logo color="white" />
        </div>
      </div>
    );
  }
  return (
    <div className="global_container">
      <Helmet>
        <style>{`body{background : ${issDarkMode ? "black" : "white"}; color: ${
          issDarkMode ? "white" : "black"
        }}`}</style>
      </Helmet>
      {!loading && (
        <LandingPage themeToggle={themeToggle} issDarkMode={issDarkMode} />
      )}
    </div>
  );
}

export default App;
