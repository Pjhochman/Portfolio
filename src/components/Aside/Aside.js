import React, { useState } from "react";
import "../../styles/css/aside.css";
import styled, { keyframes } from "styled-components";
import { fadeInRightBig, fadeInLeftBig } from "react-animations";

const fadeInRightAnimation = keyframes`${fadeInRightBig}`;
const fadeInLeftAnimation = keyframes`${fadeInLeftBig}`;

const FadeInRight = styled.div`
  animation: 2s ${fadeInRightAnimation};
`;
const FadeInLeft = styled.div`
  animation: 2s ${fadeInLeftAnimation};
`;

const Aside = () => {
  const [width, setWidth] = useState(false);
  const [display, setDisplay] = useState(false);

  const toggleWidth = () => {
    setWidth(value => !width);
  };

  const toggleDisplay = () => {
    setDisplay(value => !display);
  };

  return (
    <>
      <div
        style={width ? { width: "100%" } : { width: "0%" }}
        className="colorPalette active"
      ></div>
      <aside>
        <div id="designerContainer">
          <FadeInLeft>
            <div id="designer" onClick={toggleWidth}>
              <h2 className="title1">designer</h2>
              <p className="description">
                With a passion for designing beautiful and functional
                experiences.
              </p>
            </div>
          </FadeInLeft>
        </div>
        <div id="filler"></div>
        <div id="coderContainer" onClick={toggleDisplay}>
          <FadeInLeft>
            <div
              className="content"
              style={display ? { display: "flex" } : { display: "none" }}
            >
              <p className="content__container__text">I'm skilled in</p>
              <div className="content__container">
                <ul className="content__container__list">
                  <li className="content__container__list__item">javascript</li>
                  <li className="content__container__list__item">react</li>
                  <li className="content__container__list__item">node.js</li>
                  <li className="content__container__list__item">html</li>
                  <li className="content__container__list__item">sass</li>
                  <li className="content__container__list__item">rest APIs</li>
                  <li className="content__container__list__item">postman</li>
                  <li className="content__container__list__item">netlify</li>
                  <li className="content__container__list__item">heroku</li>
                  <li className="content__container__list__item">AWS</li>
                  <li className="content__container__list__item">cypress</li>
                  <li className="content__container__list__item">PWA</li>
                  <li className="content__container__list__item">PWA</li>
                </ul>
              </div>
            </div>
          </FadeInLeft>
          <FadeInRight>
            <div id="coder">
              <h2 className="title2">coder</h2>
              <p className="description">
                Front End Developer who focuses on writing clean, elegant and
                efficient code.
              </p>
            </div>
          </FadeInRight>
        </div>
      </aside>
    </>
  );
};

export default Aside;
