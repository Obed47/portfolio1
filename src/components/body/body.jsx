import React, { Fragment } from "react";
import "./body.css";
import { useEffect } from "react";
import AOS from "aos";
import image from "../../assets/image.svg";
import { TypeAnimation } from "react-type-animation";
export default function Body() {
  
  return (
    <div data-aos="fade-up" className="mainBody">
      <div className="left">
        <h1>I'm Wirngo Obed</h1>
        <TypeAnimation
          className="animation"
          sequence={[
            "Mobile And Web FrontEnd Developer",
            1000,
            "UI/UX Designer",
            1000,
            "Product Designer",
            1000,
            "Graphic Designer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "2em",
            display: "inline-block",
            color: "#d6bd98",
            width: "100%",
          }}
          repeat={Infinity}
        />

        <p className="description">
          "UI/UX Designer and Frontend Developer creating intuitive, visually
          appealing digital experiences with a focus on responsive design,
          interactive prototypes, and seamless user journeys."
        </p>
        <div className="socialMedias">
          <ol>
            <li className="fa fa-github"></li>
            <li className="fa fa-linkedin"></li>
            <li className="fa fa-whatsapp"></li>
            <li className="fa fa-twitter"></li>
            <li className="fa fa-phone"></li>
            <li className="fa fa-instagram"></li>
          </ol>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="image here" />
      </div>
    </div>
  );
}
