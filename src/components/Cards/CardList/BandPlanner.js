import React, { useContext } from "react";
import { CardItemContext } from "../CardItem";

const technologies = [
  "Mongoose - Schema modelling & validation",
  "Express - Handling http requests",
  "MongoDB - NoSQL database",
  "SASS - CSS extension"
];

export const BandPlanner = props => {
  const {
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
            <span style={{ fontWeight: "bold" }}>My Own Work</span>
            <hr style={{ width: "90px" }}></hr>
            Band Planner
          </TopTitle>
        </SlideInRight>
      </TopContent>
      {isExpanded && (
        <>
          <MiddleContent>
            <h3>Project Description</h3>
            <p style={{ lineHeight: "15px" }}>
              Designed for bands to keep track of songs.
            </p>
            <br></br>
            <h3>Technologies & Tools</h3>
            <ul style={{ color: "white", textAlign: "center" }}>
              <li>Node.js </li>
              <li>Javascript</li>
              {technologies.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <br></br>
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
