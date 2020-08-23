import React from "react";
import "./App.css";
import { LandingPage } from "./screens/landingPage";
import { Skills } from "./screens/skills";
import { Work } from "./screens/experience";
import { Footer } from "./screens/footer";

const App = () => {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="App">
      <header>
        <div class="theme-switch-wrapper">
          <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" onClick={switchTheme} />
            <div class="slider round"></div>
          </label>
        </div>
      </header>
      <LandingPage />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
