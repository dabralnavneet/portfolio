import React, { useEffect, useRef } from "react";
import "./index.css";
import { skills } from "../utils";

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
      <div className="main-container">
        {skills.map((item) => {
          const className = "logo-container " + item.name;
          return (
            <div className={className} key={item.name}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Skills };
