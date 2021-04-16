import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
import { fadeInLeft } from "react-animations";
import { fadeInDownBig } from "react-animations";
import { fadeIn } from "react-animations";

const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInDownAnimation = keyframes`${fadeInDownBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const email = ["hello@email.com"];
const mediaQueryWide = window.matchMedia("(max-width: 1250px)");
const mediaQueryNarrow = window.matchMedia("(max-width: 637px)");

const FadeIn = styled.div`
  animation: 0.4s ${fadeInAnimation};
`;
const FadeInDown = styled.div`
  animation: 1.2s ${fadeInDownAnimation};
`;
const FadeInRight1 = styled.div`
  animation: 0.2s ${fadeInRightAnimation};
`;
const FadeInRight2 = styled.div`
  animation: 0.3s ${fadeInRightAnimation};
`;
const FadeInLeft1 = styled.div`
  animation: 0.4s ${fadeInLeftAnimation};
`;
const FadeInLeft2 = styled.div`
  animation: 0.3s ${fadeInLeftAnimation};
`;

const copyToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  textArea.innerText = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
};

const Card4 = () => {
  const [visible, setVisible] = useState(
    !mediaQueryWide.matches ? { display: "none" } : { display: "flex" }
  );

  return (
    <div className="items__layer layer" data-depth="1.20">
      <FadeInDown>
        <div className="items__item" data-title="no.4">
          <a
            href="https://obscure-shore-89574.herokuapp.com/"
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
                    <span style={{ fontWeight: "300", color: "white" }}>
                      | Band Planner
                    </span>
                  </strong>
                </div>
              </FadeIn>
              <FadeInRight1 className="card-top" style={visible}>
                <p
                  id="designedForBands"
                  style={{
                    color: "white"
                  }}
                >
                  {!mediaQueryNarrow.matches
                    ? "Designed for Bands to"
                    : "Designed for Bands to Keep track of Songs"}
                </p>
              </FadeInRight1>
              <FadeInRight2 className="card-top" style={visible}>
                <p
                  style={{
                    marginLeft: "10px",
                    color: "white"
                  }}
                >
                  {!mediaQueryNarrow.matches ? "Keep Track of Songs" : ""}
                </p>
              </FadeInRight2>
            </div>
            <div className="card-bottom-container four">
              <FadeInLeft1 className="card-bottom" style={visible}>
                <div
                  style={{
                    marginRight: "0px"
                  }}
                >
                  {email.map(text => (
                    <span
                      id="email"
                      key={Math.random()}
                      style={{
                        cursor: "pointer",
                        pointerEvents: "all",
                        textTransform: "none",
                        color: "white"
                      }}
                      onClick={() =>
                        copyToClipboard(
                          text,
                          alert(
                            "'hello@email.com' was successfully copied to clipboard"
                          )
                        )
                      }
                    >
                      {"EMAIL:" + text}
                    </span>
                  ))}
                </div>
              </FadeInLeft1>
              <FadeInLeft2 className="card-bottom" style={visible}>
                <p id="password" style={{ marginRight: "0px", color: "white" }}>
                  PASSWORD:{" "}
                  <span
                    style={{
                      marginRight: "0px",
                      color: "white",
                      textTransform: "lowercase"
                    }}
                  >
                    hello
                  </span>
                </p>
              </FadeInLeft2>
              <FadeIn className="card-bottom" style={visible}>
                <br />
                <div id="credentials" style={{ marginRight: "0px" }}>
                  <strong style={{ color: "white" }}>
                    Mobile App{" "}
                    <span style={{ color: "white", fontWeight: "300" }}>
                      | Login Credentials
                    </span>
                  </strong>
                </div>
                <br />
              </FadeIn>
            </div>
          </a>
        </div>
      </FadeInDown>
    </div>
  );
};

export default Card4;
