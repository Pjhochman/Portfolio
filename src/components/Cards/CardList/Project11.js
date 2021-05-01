import React, { useContext, useState, useEffect } from "react";
import { CardItemContext } from "../CardItem";

const technologies = [
  "Javascript",
  "A-frame - Framework for building VR experiences"
];

export const Project11 = props => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const {
    CloseButton,
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
              <p style={{ lineHeight: "15px", color: "white" }}>
                Web VR experience.
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
                href="https://project11.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ul style={{ color: "white" }}>
                  <li>project11.netlify.app</li>
                </ul>
              </a>
            </div>
          </MiddleContent>
        </>
      )}
      <BottomContent>
        <SlideInLeft style={{ animationDuration: "0.3s" }}>
          <BottomTitle style={{ textAlign: "end" }}>
            Project 11
            {width > "637" && (
              <>
                {" "}
                <hr
                  style={{
                    width: "93px",
                    border: "1px solid white"
                  }}
                ></hr>
                <span style={{ fontWeight: "bold" }}>My Own Work</span>
              </>
            )}
          </BottomTitle>
        </SlideInLeft>
      </BottomContent>
    </>
  );
};
