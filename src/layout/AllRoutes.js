import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import LandingPage from "../pages/LandingPage";
import Nox from "../pages/Nox";
import Forric from "../pages/Forric";
import CompountCapital from "../pages/CompoundCapital";
import CubanaGroup from "../pages/CubanaGroup";
import Luxistt from "../pages/Luxistt";

const AllRoutes = ({ setIssDarkMode, issDarkMode, loading }) => {
  const themeToggle = () => {
    // setIssDarkMode(!issDarkMode);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout issDarkMode={issDarkMode} setIssDarkMode={setIssDarkMode}>
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
            setIssDarkMode={setIssDarkMode}
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
            setIssDarkMode={setIssDarkMode}
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
            setIssDarkMode={setIssDarkMode}
            footerColour={{
              background: "white",
              color: "black",
            }}
          >
            <CompountCapital
              themeToggle={themeToggle}
              issDarkMode={issDarkMode}
              setIssDarkMode={setIssDarkMode}
            />
          </PageLayout>
        }
      />

      <Route
        path="/luxistt"
        element={
          <PageLayout
            issDarkMode={issDarkMode}
            setIssDarkMode={setIssDarkMode}
            footerColour={{
              background: "#14665E",
              color: "white",
            }}
          >
            <Luxistt
              themeToggle={themeToggle}
              issDarkMode={issDarkMode}
              setIssDarkMode={setIssDarkMode}
            />
          </PageLayout>
        }
      />

      <Route
        path="/cubana-group"
        element={
          <PageLayout
            issDarkMode={issDarkMode}
            setIssDarkMode={setIssDarkMode}
            footerColour={{
              background: "white",
              color: "black",
            }}
          >
            <CubanaGroup
              themeToggle={themeToggle}
              issDarkMode={issDarkMode}
              setIssDarkMode={setIssDarkMode}
            />
          </PageLayout>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
