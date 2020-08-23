import React from "react";
import Lplogo from "../../assets/lp_image.svg";
import "./index.css";

const LandingPage = () => {
  return (
    <div className="landing-screen">
      <img src={Lplogo} className="App-logo" alt="logo" />
      <div>
        <h1 className="ex-large">Navneet Dabral</h1>
        <h2 className="ex-medium">Front end engineer</h2>
      </div>
    </div>
  );
};

export { LandingPage };
