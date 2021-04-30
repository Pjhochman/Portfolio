import React, { useContext } from "react";
import { CardItemContext } from "../CardItem";

const programInfo = [
  "Dates: August 9, 2019 – April 02, 2021",
  "Length: 80 weeks (53 on campus – 27 on internship)",
  "Location: Stockholm, Sweden"
];

export const HyperIsland = props => {
  const {
    TopContent,
    MiddleContent,
    BottomContent,
    BottomTitle,
    BottomDescription,
    FadeIn,
    SlideInLeft,
    isExpanded
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent></TopContent>
      {isExpanded && (
        <>
          <MiddleContent>
            <h3 style={{ color: "white" }}>Program Information</h3>
            <ul style={{ color: "white", textAlign: "center" }}>
              {programInfo.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <br></br>
            <h3 style={{ color: "white" }}>Website</h3>
            <a
              style={{ fontSize: "11px", margin: "0", color: "white" }}
              href="https://www.hyperisland.com/programs-and-courses/frontend-developer"
              target="_blank"
              rel="noreferrer"
            >
              <ul style={{ color: "white" }}>
                <li>hyperisland.com/frontend-developer</li>
              </ul>
            </a>
          </MiddleContent>
        </>
      )}
      <BottomContent style={{ color: "#221e41", padding: "10px" }}>
        <FadeIn style={{ animationDuration: "0.4s" }}>
          <BottomDescription
            style={{
              whiteSpace: "nowrap",
              color: "#221e41"
            }}
          >
            Hyper Island
          </BottomDescription>
        </FadeIn>
        <hr style={{ width: "89px" }} />
        <SlideInLeft style={{ animationDuration: "0.3s" }}>
          <BottomTitle style={{ color: "#221e41", fontWeight: "bold" }}>
            Education
          </BottomTitle>
        </SlideInLeft>
      </BottomContent>
    </>
  );
};
