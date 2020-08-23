import React, { useEffect, useRef } from "react";
import "./index.css";
const skills = [
  {
    name: "Html5",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "typescript",
  },
  {
    name: "react",
  },
  {
    name: "webpack",
  },
  {
    name: "react-native",
  },
  {
    name: "mobx-state-tree",
  },
];

const Skills = () => {
  const target = useRef(null);
  const hadleAnimation = () => {
    if (target) {
      if (window.scrollY >= target.current.getBoundingClientRect().y) {
        document.querySelectorAll(".logo-container").forEach((item, index) =>
          setTimeout(() => {
            item.classList.add("show-skills");
          }, 300 * index)
        );
      }
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", hadleAnimation);
  });

  return (
    <div className="skills" ref={target}>
      <div className="section-name">
        <h1 className="ex-heading">Skills</h1>
      </div>
      <div className="main-container">
        {skills.map((item) => {
          return (
            <div className="logo-container" key={item.name}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Skills };
