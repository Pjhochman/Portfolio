import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import { fadeIn } from "react-animations";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 0.3s ${fadeInAnimation};
`;

const FadeInLeft1 = styled.div`
  animation: 0.2s ${fadeInLeftAnimation};
`;

const Card1 = () => {
  const [visible, setVisible] = useState({ display: "none" });

  return (
    <div className="items__layer layer" data-depth="0.70">
      <div className="items__item" data-title="no.1">
        <a
          href="https://www.hyperisland.com/programs-and-courses/frontend-developer"
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
            <FadeIn className="card4bottom" style={visible}>
              <br />

              <span style={{ margin: "0 20px 0 0" }}>
                <br />
                <strong style={{ fontSize: "10px" }}>
                  Education
                  <hr />
                </strong>
              </span>
            </FadeIn>
            <FadeInLeft1 className="card4bottom" style={visible}>
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
    </div>
  );
};

export default Card1;
