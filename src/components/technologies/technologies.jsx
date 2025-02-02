import React from "react";
import "./technologies.css";
import TechnologyCard from "./techlonolgyCard";
import reactLogo from "../../assets/react-2.svg";
import reacttNativeLogo from "../../assets/react-native-1.svg";
import canvaLogo from "../../assets/canva-wordmark-2.svg";
import figmaIcon from "../../assets/figma-icon.svg";
import ReactCardFlip from "react-card-flip";
import { useEffect } from "react";
//takes techImage and techName as params
export default function Technologies() {
  const [fliped, setFliped] = React.useState(false);
  const updateFlip = () => {
    setFliped(!fliped);
  };
  useEffect(() => {
    setTimeout(() => {
      updateFlip();
    }, 1000);
  });

  return (
    <div data-aos="flip-up">
      <h2 className="techTitle">Dev Tools</h2>
      <div className="mainTechs">
        {/* <button onClick={updateFlip}>flip</button> */}
        {/* <ReactCardFlip isFlipped={fliped} flipDirection="horizontal"> */}
        {/* <TechnologyCard
          techImage={reactLogo}
          techName={"React Js"}
          progressValue={0.8}
        /> */}
        {/* </Rea  <p>Hello</p>ctCardFlip> */}

        <TechnologyCard
          techImage={reactLogo}
          techName={"React Js"}
          progressValue={0.8}
        />
        <TechnologyCard
          techImage={reacttNativeLogo}
          techName={"React Native"}
          progressValue={0.5}
        />
        <TechnologyCard
          techImage={canvaLogo}
          techName={"Canva"}
          progressValue={0.8}
        />
        <TechnologyCard
          techImage={figmaIcon}
          techName={"Figma"}
          progressValue={0.9}
        />
      </div>
    </div>
  );
}
