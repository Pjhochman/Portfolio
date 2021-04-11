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
            className="card4Container"
            onMouseEnter={() => {
              setVisible({ display: "flex" });
            }}
            onMouseLeave={() => {
              setVisible({ display: "none" });
            }}
          >
            <div id="card4topContainer">
              <FadeIn className="card5top" style={visible}>
                <span style={{ margin: "0" }}>
                  <br />
                  <strong style={{ fontSize: "10px" }}>
                    Previous Adventure
                    <hr style={{ opacity: "0.25" }} />
                  </strong>
                </span>
              </FadeIn>
              <FadeIn className="card5top" style={visible}>
                <br />
                <span style={{ fontWeight: "bold", fontSize: "10px" }}>
                  Accedo.tv
                </span>
              </FadeIn>
              <FadeIn className="card5top" style={visible}>
                <span style={{ fontWeight: "400", fontSize: "10px" }}>
                  S. Engineer Intern
                </span>
              </FadeIn>
            </div>

            <div id="card4bottomContainer">
              <FadeIn className="card5bottom" style={visible}>
                <span style={{ fontWeight: "400", fontSize: "10px" }}>
                  React with GraphQL
                </span>
              </FadeIn>
              <FadeIn className="card5bottom" style={visible}>
                <span style={{ fontWeight: "400", fontSize: "10px" }}>
                  Cypress E2E
                </span>
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
