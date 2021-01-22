import React, { useState } from "react";
import "./App.css";
import { LandingPage } from "./screens/landingPage";
import { Blog } from "./screens/blog";
import { Work } from "./screens/experience";
import {
  NavLink as Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useWindowSize } from "./screens/utils/hooks/useWindowSize";

const stylesnav = {
  display: "flex",
  textDecoration: "none",
  flexDirection: "column",
  color: "#3b5998",
  fontWeight: 600,
  // width: "100px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "32px 0px",
};

const activeStyle = {
  backgroundColor: "#3b5998",
  color: " #f7f7f7",
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
      {showMenu ? (
        <button className="menu-button size-large" onClick={toggleHeader}>
          &#10005;
        </button>
      ) : (
        <button className="menu-button" onClick={toggleHeader}>
          &#9776;
        </button>
      )}
      <Router>
        <header style={showMenu ? { top: "50%" } : {}}>
          <div className="navigation">
            <nav onClick={toggleHeader}>
              <Link style={stylesnav} exact activeStyle={activeStyle} to="/">
                Home
              </Link>
              <Link
                style={stylesnav}
                exact
                activeStyle={activeStyle}
                to="/work"
              >
                Work
              </Link>

              <Link
                style={stylesnav}
                exact
                activeStyle={activeStyle}
                to="/blog"
              >
                Blog
              </Link>
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
