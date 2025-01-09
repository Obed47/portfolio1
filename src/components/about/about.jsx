import React from "react";
import "./about.css";
import aboutImage from "../../assets/happy.png";
export default function About() {
  return (
    <div data-aos="fade-up" className="mainAbout">
      <div className="leftAbout">
        <img className="aboutImage" src={aboutImage} alt="" />
      </div>
      <div className="line"></div>
      <div className="rightAbout">
        <h1 className="aboutTitle">About Me</h1>
        <hr />
        <p className="aboutText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          commodi distinctio velit rem ad. Maxime quasi aliquam, repellendus,
          dolores error exercitationem, quod officia praesentium nam sapiente
          accusamus sint unde! Quod? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam vel facere sint rerum amet sunt nobis, fugiat
          iure repudiandae tempora reiciendis suscipit harum exercitationem hic,
          commodi unde eius vero. Porro?
        </p>
        <button className="cvButton">Download CV</button>
      </div>
    </div>
  );
}
