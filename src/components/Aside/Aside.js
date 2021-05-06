import React, { useState } from "react";
import { useWindowSize } from "../Cards/hooks/useWindowSize";
import styled, { keyframes } from "styled-components";
import { fadeInRightBig, fadeInLeftBig } from "react-animations";
import "./aside.css";

const fadeInRightAnimation = keyframes`${fadeInRightBig}`;
const fadeInLeftAnimation = keyframes`${fadeInLeftBig}`;

const FadeInRight = styled.div`
  animation: 2s ${fadeInRightAnimation};
`;
const FadeInLeft = styled.div`
  animation: 2s ${fadeInLeftAnimation};
`;

const technologies = [
  "javascript",
  "react",
  "node.js",
  "html",
  "sass",
  "rest APIs",
  "postman",
  "netlify",
  "heroku",
  "AWS",
  "cypress",
  "PWA",
  "PWA"
];

const Aside = () => {
  const mediaWidthDesktop = 1100;
  const [gradient, setGradient] = useState(true);
  const [display, setDisplay] = useState(false);

  const { width } = useWindowSize();

  const toggleGradient = () => setGradient(value => !value);
  const toggleDisplay = () => setDisplay(value => !value);

  return (
    <>
      <div
        style={gradient ? { width: "100%" } : { width: "0%" }}
        className="colorPalette active"
      ></div>
      <aside>
        <div id="designerContainer">
          <FadeInLeft>
            <div id="designer" onClick={toggleGradient}>
              <h2 className="title1">designer</h2>
              <p className="description">
                I have a passion for designing beautiful and functional
                experiences.
              </p>
            </div>
          </FadeInLeft>
        </div>
        <div id="filler"></div>
        <div id="coderContainer" onClick={toggleDisplay}>
          <FadeInRight>
            <div id="coder">
              <h2 className="title2">coder</h2>
              <p className="description">
                {width > mediaWidthDesktop
                  ? "   Front End Developer who focuses on writing clean, elegant and efficient code."
                  : "Focusing on writing clean, elegant and efficient code."}
              </p>
            </div>
            <div
              className="content"
              style={display ? { display: "flex" } : { display: "none" }}
            >
              <p className="content__container__text">I'm skilled in</p>
              <div className="content__container">
                <ul className="content__container__list">
                  {technologies.map((item, index) => {
                    return (
                      <li
                        className="content__container__list__item"
                        key={index}
                        style={{ margin: "0" }}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </FadeInRight>
        </div>
      </aside>
    </>
  );
};

export default Aside;
