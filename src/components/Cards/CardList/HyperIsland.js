import React, { useContext, useState, useEffect } from "react";
import { CardItemContext } from "../CardItem";

const programInfo = [
  "Dates: August 9, 2019 – April 02, 2021",
  "80 weeks (53 on campus – 27 on internship)",
  "Location: Stockholm, Sweden"
];

export const HyperIsland = props => {
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
    FadeIn,
    SlideInLeft,
    isExpanded
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent></TopContent>
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
              stroke="#221e41"
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
              stroke="#221e41"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </CloseButton>
          <MiddleContent>
            <div>
              <h3 style={{ color: "#221e41" }}>Program Information</h3>
              <ul style={{ color: "#221e41", textAlign: "center" }}>
                {programInfo.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <br></br>
            <div>
              <h3 style={{ color: "#221e41" }}>Website</h3>
              <a
                style={{ fontSize: "11px", margin: "0", color: "#221e41" }}
                href="https://www.hyperisland.com/programs-and-courses/frontend-developer"
                target="_blank"
                rel="noreferrer"
              >
                <ul style={{ color: "#221e41" }}>
                  <li>hyperisland.com/frontend-developer</li>
                </ul>
              </a>
            </div>
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

        <SlideInLeft style={{ animationDuration: "0.3s" }}>
          <BottomTitle
            style={{ color: "#221e41", fontWeight: "bold", textAlign: "end" }}
          >
            {width > "637" && (
              <>
                <hr style={{ width: "89px" }} />
                Education
              </>
            )}
          </BottomTitle>
        </SlideInLeft>
      </BottomContent>
    </>
  );
};
