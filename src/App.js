import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Helmet } from "react-helmet";
import { Logo } from "./components/Icons";
import Nox from "./pages/Nox";
import Forric from "./pages/Forric";
import CompountCapital from "./pages/CompoundCapital";
import CubanaGroup from "./pages/CubanaGroup";
import Luxistt from "./pages/Luxistt";

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
            path="/nox"
            element={
              <PageLayout issDarkMode={issDarkMode}>
                <Nox themeToggle={themeToggle} issDarkMode={issDarkMode} />
              </PageLayout>
            }
          />
          <Route
            path="/forric"
            element={
              <PageLayout issDarkMode={issDarkMode}>
                <Forric themeToggle={themeToggle} issDarkMode={issDarkMode} />
              </PageLayout>
            }
          />
          <Route
            path="/compound-capital"
            element={
              <PageLayout issDarkMode={issDarkMode}>
                <CompountCapital
                  themeToggle={themeToggle}
                  issDarkMode={issDarkMode}
                />
              </PageLayout>
            }
          />
          <Route
            path="/forric"
            element={
              <PageLayout issDarkMode={issDarkMode}>
                <Forric themeToggle={themeToggle} issDarkMode={issDarkMode} />
              </PageLayout>
            }
          />
          <Route
            path="/luxistt"
            element={
              <PageLayout issDarkMode={issDarkMode}>
                <Luxistt themeToggle={themeToggle} issDarkMode={issDarkMode} />
              </PageLayout>
            }
          />
          <Route
            path="/cubana-group"
            element={
              <PageLayout issDarkMode={issDarkMode}>
                <CubanaGroup
                  themeToggle={themeToggle}
                  issDarkMode={issDarkMode}
                />
              </PageLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
