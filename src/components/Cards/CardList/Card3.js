import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import { fadeInUpBig } from "react-animations";
import { fadeIn } from "react-animations";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInUpAnimation = keyframes`${fadeInUpBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const mediaQueryWide = window.matchMedia("(max-width: 1250px)");
const mediaQueryNarrow = window.matchMedia("(max-width: 637px)");

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
  const [visible, setVisible] = useState(
    !mediaQueryWide.matches ? { display: "none" } : { display: "flex" }
  );
  const [width, setWidth] = useState(mediaQueryNarrow);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);
  return (
    <div className="items__layer layer" data-depth="0.65">
      <FadeInUp>
        <div className="items__item" data-title="no.3">
          <a
            href="https://project11.netlify.app/"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0" }}
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
            <div className="card-bottom-container" style={{ height: "100%" }}>
              <FadeInLeft1 className="card-bottom" style={visible}>
                <p>
                  <span
                    style={mediaQueryNarrow.matches ? { color: "white" } : ""}
                  >
                    Web VR experience Created
                  </span>
                </p>
              </FadeInLeft1>
              <FadeInLeft2 className="card-bottom" style={visible}>
                <p>
                  <span style={{ color: "white" }}>
                    with A-frame<strong>.</strong>
                  </span>
                </p>
              </FadeInLeft2>
              <FadeIn className="card-bottom" style={visible}>
                <br />
                <div id="aFrame" style={{ marginRight: "25px" }}>
                  <span style={{ color: "white" }}>
                    <strong>My Own Work </strong>
                    {mediaQueryNarrow.matches ? <hr></hr> : ""}
                    {mediaQueryNarrow.matches ? "Project 11" : "| Project 11"}
                  </span>
                </div>
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
