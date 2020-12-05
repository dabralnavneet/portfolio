import React from "react";
import "./index.css";
import svgMain from "../../assets/apps.svg";

const LandingPage = () => {
  return (
    <div className="landing-screen">
      <div className="itsme">Navneet Dabral</div>
      <img src={svgMain} alt="logo" className='logo-image' />
      <h2 className="logo-name">
        Front End <br />
        UI/UX Engineer
      </h2>
    </div>
  );
};

export { LandingPage };
