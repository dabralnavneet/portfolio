import React from "react";
import "./index.css";

const Footer = () => {
  const handleClick = () => {
    const anchor = document.createElement("a");
    anchor.href = "mailto:dabralnavneet@gmail.com";
    anchor.click();
  };
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-item">
            <h2 className="ex-medium">let's connect</h2>
          </div>
          <div className="footer-item">
            <button onClick={handleClick}>Hire me</button>
          </div>
        </div>
      </div>
      <div className="strip">LinkedIn | Twitter</div>
    </>
  );
};

export { Footer };
