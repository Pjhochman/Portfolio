import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const mediaQuery = window.matchMedia("(max-width: 1250px)");

const FadeIn = styled.div`
  animation: 0.6s ${fadeInAnimation};
`;
const FadeIn1 = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

const Card4 = () => {
  const [visible, setVisible] = useState(
    !mediaQuery.matches ? { display: "none" } : { display: "flex" }
  );
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
              setVisible(
                !mediaQuery.matches ? { display: "none" } : { display: "flex" }
              );
            }}
          >
            <div style={{ width: "100%" }}>
              <FadeIn className="card-top-left" style={visible}>
                <span style={{ margin: "0" }}>
                  <br />
                  <strong>
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
