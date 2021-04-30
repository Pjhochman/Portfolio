import React, { useContext } from "react";
import { CardItemContext } from "../CardItem";

const technologies = [
  "Javascript",
  "A-frame - Framework for building VR experiences"
];

export const Project11 = props => {
  const {
    TopContent,
    TopTitle,
    MiddleContent,
    BottomContent,
    BottomTitle,
    SlideInLeft,
    isExpanded
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent>
        <TopTitle></TopTitle>
      </TopContent>
      {isExpanded && (
        <>
          <MiddleContent>
            <h3 style={{ color: "white" }}>Project Description</h3>
            <p style={{ lineHeight: "15px", color: "white" }}>
              Web VR experience.
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
              href="https://project11.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ul style={{ color: "white" }}>
                <li>project11.netlify.app</li>
              </ul>
            </a>
          </MiddleContent>
        </>
      )}
      <BottomContent>
        <SlideInLeft style={{ animationDuration: "0.3s" }}>
          <BottomTitle style={{ textAlign: "end" }}>
            Project 11
            <hr
              style={{
                width: "93px",
                border: "1px solid white"
              }}
            ></hr>
            <span style={{ fontWeight: "bold" }}>My Own Work</span>
          </BottomTitle>
        </SlideInLeft>
      </BottomContent>
    </>
  );
};
