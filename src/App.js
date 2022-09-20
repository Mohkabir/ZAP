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

import { ParallaxProvider } from "react-scroll-parallax";
import Test from "./pages/Test";

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
    <ParallaxProvider>
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
                <PageLayout
                  issDarkMode={issDarkMode}
                  footerColour={{
                    background: "black",
                    color: "white",
                  }}
                >
                  <Nox themeToggle={themeToggle} issDarkMode={issDarkMode} />
                </PageLayout>
              }
            />
            <Route
              path="/forric"
              element={
                <PageLayout
                  issDarkMode={issDarkMode}
                  footerColour={{
                    background: "white",
                    color: "black",
                  }}
                >
                  <Forric themeToggle={themeToggle} issDarkMode={issDarkMode} />
                </PageLayout>
              }
            />
            <Route
              path="/compound-capital"
              element={
                <PageLayout
                  issDarkMode={issDarkMode}
                  footerColour={{
                    background: "white",
                    color: "black",
                  }}
                >
                  <CompountCapital
                    themeToggle={themeToggle}
                    issDarkMode={issDarkMode}
                  />
                </PageLayout>
              }
            />

            <Route
              path="/luxistt"
              element={
                <PageLayout
                  issDarkMode={issDarkMode}
                  footerColour={{
                    background: "#14665E",
                    color: "white",
                  }}
                >
                  <Luxistt
                    themeToggle={themeToggle}
                    issDarkMode={issDarkMode}
                  />
                </PageLayout>
              }
            />
      
            <Route
              path="/cubana-group"
              element={
                <PageLayout
                  issDarkMode={issDarkMode}
                  footerColour={{
                    background: "black",
                    color: "white",
                  }}
                >
                  <CubanaGroup
                    themeToggle={themeToggle}
                    issDarkMode={issDarkMode}
                  />
                </PageLayout>
              }
            />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
