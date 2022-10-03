import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Helmet } from "react-helmet";
import { Logo } from "./components/Icons";
import AllRoutes from "./layout/AllRoutes";

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [issDarkMode, setIssDarkMode] = useState(true);

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
    <BrowserRouter>
      <div className="global_container">
        <Helmet>
          <style>{`body{background : ${
            issDarkMode ? "black" : "white"
          }; color: ${issDarkMode ? "white" : "#1E1E1E"}}`}</style>
        </Helmet>
        <AllRoutes
          setIssDarkMode={setIssDarkMode}
          issDarkMode={issDarkMode}
          loading={loading}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
