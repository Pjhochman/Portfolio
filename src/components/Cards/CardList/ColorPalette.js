import React, { useContext } from "react";
import { CardItemContext } from "../CardItem";

const technologies = [
  "Javascript",
  "P5.js - Library for creating graphic and interactive experiences"
];

export const ColorPalette = props => {
  const {
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
            <span style={{ fontWeight: "bold" }}>My Own Work</span>
            <hr
              style={{
                width: "93px",
                border: "1px solid white"
              }}
            ></hr>
            Color Palette
          </TopTitle>
        </SlideInRight>
      </TopContent>
      {isExpanded && (
        <>
          <MiddleContent>
            <h3 style={{ color: "white" }}>Project Description</h3>
            <p style={{ lineHeight: "15px", color: "white" }}>
              Gradient color-generator based on uiGradients.com data.
            </p>
            <br></br>
            <h3 style={{ color: "white" }}>Technologies & Tools</h3>
            <ul style={{ color: "white", textAlign: "center" }}>
              {technologies.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <br></br>
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
