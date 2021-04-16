import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
import { fadeInLeftBig } from "react-animations";
import { fadeIn } from "react-animations";

const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInLeftAnimation = keyframes`${fadeInLeftBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const mediaQueryWide = window.matchMedia("(max-width: 1250px)");
const mediaQueryNarrow = window.matchMedia("(max-width: 637px)");

const FadeIn = styled.div`
  animation: 0.4s ${fadeInAnimation};
`;
const FadeInLeft = styled.div`
  animation: 1.8s ${fadeInLeftAnimation};
`;
const FadeInRight1 = styled.div`
  animation: 0.2s ${fadeInRightAnimation};
`;
const FadeInRight2 = styled.div`
  animation: 0.3s ${fadeInRightAnimation};
`;
const FadeInRight3 = styled.div`
  animation: 0.4s ${fadeInRightAnimation};
`;

const Card2 = () => {
  const [visible, setVisible] = useState(
    !mediaQueryWide.matches ? { display: "none" } : { display: "flex" }
  );
  const [width, setWidth] = useState(mediaQueryNarrow);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);
  return (
    <div className="items__layer layer" data-depth="0.85">
      <FadeInLeft>
        <div className="items__item" data-title="no.2">
          <a
            href="https://peterscolorpalette.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="cardContainer"
            onMouseEnter={() => {
              setVisible({ display: "flex" });
            }}
            onMouseLeave={() => {
              setVisible(
                !mediaQueryWide.matches
                  ? { display: "none" }
                  : { display: "flex" }
              );
            }}
          >
            <div className="card-top-container">
              <FadeIn className="card-top" style={visible}>
                <div>
                  <br />
                  <strong style={{ color: "white" }}>
                    My Own Work{" "}
                    <span
                      style={{
                        fontWeight: "300",
                        color: "white"
                      }}
                    >
                      | Color Palette
                    </span>
                  </strong>
                </div>
              </FadeIn>
              <br />
              <FadeInRight1 className="card-top" style={visible}>
                <p id="interactiveDesign" style={{ color: "white" }}>
                  Graphic and Interactive design
                </p>
              </FadeInRight1>
              <FadeInRight2 className="card-top" style={visible}>
                <p style={{ color: "white" }}>using the P5.js</p>
              </FadeInRight2>
              <FadeInRight3 className="card-top" style={visible}>
                <p style={{ color: "white" }}>
                  library<strong>.</strong>
                </p>
              </FadeInRight3>
            </div>
          </a>
        </div>
      </FadeInLeft>
    </div>
  );
};

export default Card2;
