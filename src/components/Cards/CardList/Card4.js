import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
import { fadeInLeft } from "react-animations";

import { fadeIn } from "react-animations";

const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 0.4s ${fadeInAnimation};
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
  const [visible, setVisible] = useState({ display: "none" });
  const email = ["hello@email.com"];

  return (
    <div className="items__layer layer" data-depth="1.20">
      <div className="items__item" data-title="no.4">
        <a
          href="https://obscure-shore-89574.herokuapp.com/"
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
                <strong>
                  My Own Work |{" "}
                  <span style={{ fontWeight: "300" }}>Band Planner</span>
                </strong>
              </p>
            </FadeIn>
            <br />
            <FadeInRight1 className="card4top" style={visible}>
              <p>Designed for Bands to</p>
            </FadeInRight1>
            <FadeInRight2 className="card4top" style={visible}>
              <p>
                Keep Track of Songs<strong>.</strong>
              </p>
            </FadeInRight2>
            <FadeInRight3 className="card4top" style={visible}>
              {/* <p>And upload files</p> */}
            </FadeInRight3>
          </div>
          <div id="card4bottomContainer">
            <FadeInLeft1 className="card4bottom" style={visible}>
              <p>
                {email.map(text => (
                  <span
                    style={{
                      cursor: "pointer",
                      pointerEvents: "all",
                      textTransform: "none"
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
              </p>
            </FadeInLeft1>
            <FadeInLeft2 className="card4bottom" style={visible}>
              <p>
                PASSWORD:{" "}
                <span style={{ textTransform: "lowercase" }}>hello</span>
              </p>
            </FadeInLeft2>
            <FadeIn className="card4bottom" style={visible}>
              <br />
              <p>
                <strong>
                  Mobile App |{" "}
                  <span style={{ fontWeight: "300" }}>Login Credentials</span>
                </strong>
              </p>
              <br />
            </FadeIn>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card4;
