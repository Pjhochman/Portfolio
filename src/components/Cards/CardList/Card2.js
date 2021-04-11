import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
import { fadeInLeftBig } from "react-animations";
import { fadeIn } from "react-animations";

const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInLeftAnimation = keyframes`${fadeInLeftBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;

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
  const [visible, setVisible] = useState({ display: "none" });

  return (
    <div className="items__layer layer" data-depth="0.85">
      <FadeInLeft>
        <div className="items__item" data-title="no.2">
          <a
            href="https://peterscolorpalette.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="card4Container"
            onMouseEnter={() => {
              setVisible({ display: "flex" });
            }}
            onMouseLeave={() => {
              setVisible({ display: "none" });
            }}
          >
            <div id="card4topContainer">
              <FadeIn className="card4top" style={visible}>
                <p>
                  <br />
                  <strong style={{ fontSize: "11px", color: "white" }}>
                    My Own Work{" "}
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        color: "white"
                      }}
                    >
                      | Color Palette
                    </span>
                  </strong>
                </p>
              </FadeIn>
              <br />
              <FadeInRight1 className="card4top" style={visible}>
                <p style={{ fontSize: "11px", color: "white" }}>
                  Graphic and Interactive design
                </p>
              </FadeInRight1>
              <FadeInRight2 className="card4top" style={visible}>
                <p style={{ fontSize: "11px", color: "white" }}>
                  using the P5.js
                </p>
              </FadeInRight2>
              <FadeInRight3 className="card4top" style={visible}>
                <p style={{ fontSize: "11px", color: "white" }}>
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
