import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import { fadeInUpBig } from "react-animations";
import { fadeIn } from "react-animations";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInUpAnimation = keyframes`${fadeInUpBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 0.4s ${fadeInAnimation};
`;
const FadeInUp = styled.div`
  animation: 1.2s ${fadeInUpAnimation};
`;
const FadeInLeft1 = styled.div`
  animation: 0.4s ${fadeInLeftAnimation};
`;
const FadeInLeft2 = styled.div`
  animation: 0.3s ${fadeInLeftAnimation};
`;

const Card3 = () => {
  const [visible, setVisible] = useState({ display: "none" });
  return (
    <div className="items__layer layer" data-depth="0.65">
      <FadeInUp>
        <div className="items__item" data-title="no.3">
          <a
            href="https://project11.netlify.app/"
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
            <div id="card4bottomContainer" style={{ height: "100%" }}>
              <FadeInLeft1 className="card4bottom" style={visible}>
                <p>
                  <span style={{ fontSize: "11px", color: "white" }}>
                    Web VR experience Created
                  </span>
                </p>
              </FadeInLeft1>
              <FadeInLeft2 className="card4bottom" style={visible}>
                <p>
                  <span style={{ fontSize: "11px", color: "white" }}>
                    with A-frame<strong>.</strong>
                  </span>
                </p>
              </FadeInLeft2>
              <FadeIn className="card4bottom" style={visible}>
                <br />
                <p>
                  <span style={{ fontSize: "11px", color: "white" }}>
                    <strong>My Own Work </strong>| Project 11
                  </span>
                </p>
                <br />
              </FadeIn>
            </div>
          </a>
        </div>
      </FadeInUp>
    </div>
  );
};

export default Card3;
