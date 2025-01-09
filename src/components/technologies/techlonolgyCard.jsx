import React from "react";
import "./technologyCard.css";
export default function TechnologyCard(props) {
  return (
    <div data-aos="zoom-in" className="technologyCardMain">
      <img className="image" src={props.techImage} alt="" />
      <h2 className="name">{props.techName}</h2>
      <progress value={props.progressValue} />
    </div>
  );
}
