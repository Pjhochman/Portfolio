import React, { useState } from "react";
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
  const [hover, setHover] = useState("colorPalette");
  const [width, setWidth] = useState({ width: "0vw" });
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(value => !isActive);
  };

  const onHover = () => {
    setHover("colorPalette active");
    setWidth({ width: "50vw" });
  };
  const onLeave = () => {
    setHover("colorPalette active");
    setWidth({ width: "0vw" });
  };

  return (
    <>
      <div style={width} className={hover}></div>
      <aside>
        <FadeInLeft>
          <div id="designer" onMouseEnter={onHover} onMouseLeave={onLeave}>
            <h2 className="title1">designer</h2>
            <p className="description">
              Passion for designing beautiful and functional experiences.
            </p>
          </div>
        </FadeInLeft>
        <div id="coderContainer" onClick={toggleClass}>
          <FadeInLeft>
            <div
              className="content"
              style={isActive ? { display: "flex" } : { display: "none" }}
            >
              <p className="content__container__text">I'm used to</p>
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
