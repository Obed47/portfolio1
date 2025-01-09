import React from "react";
import "./projectCard.css";
export default function ProjectCard({ projectImage, title, description }) {
  return (
    <div data-aos="fade-left" className="mainProjectCard">
      <img src={projectImage} alt="error" />
      <h2 className="projectTitle"> {title}</h2>
      <p className="projectDescription">{description}</p>
    </div>
  );
}
