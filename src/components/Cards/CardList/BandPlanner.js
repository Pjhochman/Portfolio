import React, { useContext, useState, useEffect } from "react";
import { CardItemContext } from "../CardItem";

const technologies = [
  "Mongoose - Schema modelling & validation",
  "Express - Handling http requests",
  "MongoDB - NoSQL database",
  "SASS - CSS extension"
];

export const BandPlanner = props => {
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
    TopTitle,
    BottomTitle,
    BottomDescription,
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
                <span style={{ fontWeight: "bold" }}>My Own Work</span>
                <hr style={{ width: "90px" }}></hr>
              </>
            )}
            Band Planner
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
              <h3>Project Description</h3>
              <p style={{ lineHeight: "15px" }}>
                Designed for bands to keep track of songs.
              </p>
            </div>
            <br></br>
            <div>
              <h3>Technologies & Tools</h3>
              <ul style={{ color: "white", textAlign: "center" }}>
                <li>Node.js </li>
                <li>Javascript</li>
                {technologies.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <br></br>
            <div>
              <h3>Website</h3>
              <a
                style={{ fontSize: "11px", margin: "0", color: "white" }}
                href="https://obscure-shore-89574.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ul style={{ color: "white", textAlign: "center" }}>
                  <li>obscure-shore-89574.herokuapp.com</li>
                  <li>Email: hello@email.com</li>
                  <li> Password: hello</li>
                </ul>
              </a>
            </div>
          </MiddleContent>
          <BottomContent>
            <BottomDescription></BottomDescription>
            <BottomTitle>
              <span style={{ fontWeight: "bold" }}>Mobile App </span>| Login
              Credentials
            </BottomTitle>
          </BottomContent>
        </>
      )}
    </>
    // )}
    // </>
  );
};
