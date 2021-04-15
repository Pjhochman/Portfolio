import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import { fadeInRightBig } from "react-animations";
import { fadeIn } from "react-animations";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRightBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const mediaQuery = window.matchMedia("(max-width: 1250px)");

const FadeIn = styled.div`
  animation: 0.3s ${fadeInAnimation};
`;
const FadeInLeft1 = styled.div`
  animation: 0.2s ${fadeInLeftAnimation};
`;
const FadeInRight = styled.div`
  animation: 1.8s ${fadeInRightAnimation};
`;

const Card1 = () => {
  const [visible, setVisible] = useState(
    !mediaQuery.matches ? { display: "none" } : { display: "flex" }
  );

  return (
    <div className="items__layer layer" data-depth="0.70">
      <FadeInRight>
        <div className="items__item" data-title="no.1">
          <a
            href="https://www.hyperisland.com/programs-and-courses/frontend-developer"
            target="_blank"
            rel="noreferrer"
            className="cardContainer"
            onMouseEnter={() => {
              setVisible({ display: "flex" });
            }}
            onMouseLeave={() => {
              setVisible(
                !mediaQuery.matches ? { display: "none" } : { display: "flex" }
              );
            }}
          >
            <div className="card-bottom-container" style={{ height: "100%" }}>
              <FadeIn className="card-bottom" style={visible}>
                <br />

                <span style={{ margin: "0 20px 0 0" }}>
                  <br />
                  <strong style={{ fontSize: "10px" }}>
                    Education
                    <hr />
                  </strong>
                </span>
              </FadeIn>
              <FadeInLeft1 className="card-bottom" style={visible}>
                <span
                  style={{
                    margin: "0 20px 10px 0",
                    fontSize: "10px",
                    color: "black"
                  }}
                >
                  Hyper Island
                </span>
              </FadeInLeft1>
            </div>
          </a>
        </div>
      </FadeInRight>
    </div>
  );
};

export default Card1;
