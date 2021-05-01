import React, { useContext, useState, useEffect } from "react";
import { CardItemContext } from "../CardItem";

const technologies = [
  "Javascript",
  "P5.js - Library for creating graphic and interactive experiences"
];

export const ColorPalette = props => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const {
    CloseButton,
    TopContent,
    MiddleContent,
    BottomContent,
    BottomTitle,
    BottomDescription,
    TopTitle,
    SlideInRight,
    isExpanded
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent>
        <SlideInRight style={{ animationDuration: "0.3s" }}>
          <TopTitle>
            {width > "637" && (
              <>
                <span
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  My Own Work
                </span>
                <hr
                  style={{
                    width: "93px",
                    border: "1px solid white"
                  }}
                ></hr>
              </>
            )}
            Color Palette
          </TopTitle>
        </SlideInRight>
      </TopContent>
      {isExpanded && (
        <>
          <CloseButton
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20.39 20.39"
          >
            <line
              x1="19.39"
              y1="19.39"
              x2="1"
              y2="1"
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="19.39"
              x2="19.39"
              y2="1"
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </CloseButton>
          <MiddleContent>
            <div>
              <h3 style={{ color: "white" }}>Project Description</h3>
              <p style={{ lineHeight: "15px", color: "white", width: "100%" }}>
                Gradient color-generator based on uiGradients.com data.
              </p>
            </div>
            <br></br>
            <div>
              <h3 style={{ color: "white" }}>Technologies & Tools</h3>
              <ul style={{ color: "white", textAlign: "center" }}>
                {technologies.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <br></br>
            <div>
              <h3 style={{ color: "white" }}>Website</h3>
              <a
                style={{ fontSize: "11px", margin: "0", color: "white" }}
                href="https://peterscolorpalette.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ul style={{ color: "white" }}>
                  <li>peterscolorpalette.netlify.app</li>
                </ul>
              </a>
            </div>
          </MiddleContent>

          <BottomContent>
            <BottomDescription></BottomDescription>
            <BottomTitle>
              <span style={{ fontWeight: "bold" }}>Mobile & Desktop</span> |
              Interactive Design
            </BottomTitle>
          </BottomContent>
        </>
      )}
    </>
  );
};
