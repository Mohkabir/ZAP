import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Helmet } from "react-helmet";
import { Logo } from "./components/Icons";
import CaseOne from "./pages/CaseOne";

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
    <BrowserRouter>
      <div className="global_container">
        <Helmet>
          <style>{`body{background : ${
            issDarkMode ? "black" : "white"
          }; color: ${issDarkMode ? "white" : "black"}}`}</style>
        </Helmet>

        <Routes>
          <Route
            path="/"
            element={
              <PageLayout issDarkMode={issDarkMode}>
                {!loading && (
                  <LandingPage
                  themeToggle={themeToggle}
                  issDarkMode={issDarkMode}
                  />
                )}
              </PageLayout>
            }
          />
          <Route
            path="/case-study"
            element={
              <PageLayout issDarkMode={issDarkMode}>
                <CaseOne themeToggle={themeToggle} issDarkMode={issDarkMode} />
              </PageLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
