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
            worked on latest technologoies like mobx-state-tree ,React native
            web, typescript and storybook. developed crossplatform apps and used
            across android, ios and web
          </div>
          <span>
            <div className="company"></div>
            <h5> 2019 - {new Date().getFullYear()}</h5>
          </span>
          <div className="work-done jio2">
            Delivered high quality product , In dynamic work culture. used yarn
            workspaces for maintaining and code sharing between projects, worked
            on azure for building CI/CD pipelines for different testing
            environments
          </div>
        </div>
      </div>
    </div>
  );
};

export { Work };
