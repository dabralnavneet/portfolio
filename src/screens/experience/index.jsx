import React from "react";
import "./index.css";

const Work = () => {
  return (
    <div className="experience">
      <div className="section-name">
        <h1 className="ex-heading">Work</h1>
      </div>
      <div className="work-container">
        <div className="work-item">
          <div className="work-done jio1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo"
          </div>
          <span>
            <h3 className="company">Jio</h3>
            <h5> 2019 - today</h5>
          </span>
          <div className="work-done jio2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo"
          </div>
        </div>
      </div>
    </div>
  );
};

export { Work };
