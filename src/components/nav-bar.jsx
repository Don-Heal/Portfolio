import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav class="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/social">Social</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};
export default Navigation;
