import React from "react";
import "./projects.css";
import projectImage1 from "../../assets/project1.png";
import projectImage2 from "../../assets/project2.png";
import projectImage3 from "../../assets/project3.png";
import projectImage4 from "../../assets/peoject4.png";
import ProjectCard from "./projectCard";
//projectcard card takes in image,titl and description
export default function Projects() {
  return (
    <div data-aos ="fade-in" className="mainProjects">
      <h1 className="mainTitle">Projects</h1>
      <div className="projectsContainer">
        <ProjectCard
          projectImage={projectImage1}
          title={"Meditation App"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi distinctio velit rem ad"
          }
        />
        <ProjectCard
          projectImage={projectImage2}
          title={"Mac Donalds"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi distinctio velit rem ad"
          }
        />
        <ProjectCard
          projectImage={projectImage3}
          title={"Modern Hoome"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi distinctio velit rem ad"
          }
        />
        <ProjectCard
          projectImage={projectImage4}
          title={"Travel App"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi distinctio velit rem ad"
          }
        />
      </div>
    </div>
  );
}
