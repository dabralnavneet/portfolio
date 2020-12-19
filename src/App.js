import React, { useState } from "react";
import "./App.css";
import { LandingPage } from "./screens/landingPage";
import { Blog } from "./screens/blog";
import { Work } from "./screens/experience";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useWindowSize } from "./screens/utils/hooks/useWindowSize";

const stylesnav = {
  textDecoration: "none",
  color: "#9a97f3",
  fontWeight: 600,
};

const activeStyle = {
  opacity: 0,
};

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { _height, width } = useWindowSize();
  const toggleHeader = () => {
    if (width < 601) {
      setShowMenu(!showMenu);
    }
  };
  return (
    <div className="App">
      <button className="menu-button" onClick={toggleHeader}>
        &#9776;
      </button>
      <Router>
        <header style={showMenu ? { top: "50%" } : {}}>
          <div className="navigation">
            <nav onClick={toggleHeader}>
              <li>
                <Link style={stylesnav} activeStyle={activeStyle} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={stylesnav} activeStyle={activeStyle} to="/work">
                  Work
                </Link>
              </li>
              <li>
                <Link style={stylesnav} activeStyle={activeStyle} to="/blog">
                  Blog
                </Link>
              </li>
            </nav>
          </div>
        </header>
        <div className="main-container">
          <Switch>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
