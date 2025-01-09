import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="mainHeader">
      <div className="title">
        <h1>Portfolio</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <span className="fa fa-home "> </span> Home
          </li>
          <li>
            <span className="fa fa-address-card  "></span> About Me
          </li>
          <li>
            <span className="fa fa-bicycle "></span> Know How
          </li>
          <li>
            {" "}
            <span className="fa fa-phone  "></span> Contact Me
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <p className="fa fa-list"></p>
      </div>
    </div>
  );
}
