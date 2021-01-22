import React from "react";
import "./index.css";

const categories = ["working on it"];

const Tabs = (props) => {
  return <div className="tabs">{props.name}</div>;
};

const Blog = () => {
  const a = categories.map((item) => <Tabs name={item} isSelected="false" />);
  return (
    <div className="blog-container">
      <div className="blog-menu">{a}</div>
      <div></div>
    </div>
  );
};

export { Blog };
