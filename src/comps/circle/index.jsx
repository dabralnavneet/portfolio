import React, { useEffect } from "react";
import "./index.css";

const Circle = (props) => {
  const target = document.querySelector(props.name);
  const hadleAnimation = () => {
    if (target) {
      if (window.scrollY >= target.getBoundingClientRect().top) {
        target.classList.add(props.name);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", hadleAnimation);
  });

  const classBox = `item`;
  return (
    <div className={classBox} id={props.name}>
      <h3>{props.name}</h3>
      <svg width="165" height="165" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <circle
            r="70"
            cy="80"
            cx="80"
            stroke-width="20"
            stroke="grey"
            fill="none"
          />
          <circle
            class="circle_animation"
            r="70"
            cy="80"
            cx="80"
            stroke-width="20"
            stroke="#61DAFB"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};

export { Circle };
