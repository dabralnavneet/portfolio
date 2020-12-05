import React from "react";
import "./index.css";

const categories = ["HTML", "CSS", "JavaScript", "React", "React-native"];

const Tabs = (props) => {
  return <div className="tabs">{props.name}</div>;
};

const Post = (props) => {
  return <div>{props.name}</div>;
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
