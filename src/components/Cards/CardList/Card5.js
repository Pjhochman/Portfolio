import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 0.6s ${fadeInAnimation};
`;
const FadeIn1 = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

const Card4 = () => {
  const [visible, setVisible] = useState({ display: "none" });

  return (
    <div className="items__layer layer" data-depth="0.00">
      <FadeIn1>
        <div className="items__item" data-title="no.5">
          <a
            href="https://www.accedo.tv/one/"
            target="_blank"
            rel="noreferrer"
            className="cardContainer"
            onMouseEnter={() => {
              setVisible({ display: "flex" });
            }}
            onMouseLeave={() => {
              setVisible({ display: "none" });
            }}
          >
            <div>
              <FadeIn className="card-top-left" style={visible}>
                <span style={{ margin: "0" }}>
                  <br />
                  <strong style={{ fontSize: "10px" }}>
                    Previous Adventure
                    <hr style={{ opacity: "0.25" }} />
                  </strong>
                </span>
              </FadeIn>
              <FadeIn className="card-top-left" style={visible}>
                <br />
                <span>Accedo.tv</span>
              </FadeIn>
              <FadeIn className="card-top-left" style={visible}>
                <span>S. Engineer Intern</span>
              </FadeIn>
            </div>

            <div className="card-bottom-container">
              <FadeIn className="card-bottom-center" style={visible}>
                <span>React with GraphQL</span>
              </FadeIn>
              <FadeIn className="card-bottom-center" style={visible}>
                <span>Cypress E2E</span>
              </FadeIn>
              <br />
            </div>
          </a>
        </div>
      </FadeIn1>
    </div>
  );
};

export default Card4;
