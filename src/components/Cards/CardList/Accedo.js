import React, { useContext } from "react";
import { CardItemContext } from "../CardItem";

const technologies = [
  "Validation - Insomnia",
  "Design system - Zeplin",
  "Source control - GitHub",
  "Work - Managed through Jira",
  "Tools - Visual Studio Code",
  "Build & Deploy - Jenkins Pipeline with Docker",
  "Cypress - E2E Testing Framework"
];

export const Accedo = props => {
  const {
    TopContent,
    MiddleContent,
    BottomContent,
    TopTitle,
    TopDescription,
    FadeIn,
    isExpanded
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent
        style={{
          alignItems: "center",
          color: "#221e41",
          justifyContent: "space-between"
        }}
      >
        <FadeIn style={{ animationDuration: "0.3s", marginTop: "25px" }}>
          <TopTitle
            style={{
              fontWeight: "bold",
              color: "#221e41",
              textAlign: "center",
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            Previously
            <hr style={{ width: "76px" }} />
          </TopTitle>

          <TopDescription
            style={{
              textAlign: "center",
              width: "100%",
              whiteSpace: "nowrap",
              color: "#221e41",
              fontSize: "8px"
            }}
          >
            <p>Accedo.tv</p>
            <p>S. Engineer Intern</p>
          </TopDescription>
        </FadeIn>
      </TopContent>
      {isExpanded && (
        <>
          <MiddleContent>
            <h3 style={{ color: "#221e41" }}>Product Description</h3>
            <p style={{ lineHeight: "15px", color: "#221e41", width: "400px" }}>
              Accedo One is a SaaS (Softare as a service) solution that provides
              content owners and brands with the ability to build, launch, and
              scale video streaming services.
            </p>
            <br></br>
            <h3 style={{ color: "#221e41" }}>Technologies & Tools</h3>
            <ul style={{ color: "#221e41", textAlign: "center" }}>
              <li>React with GraphQL</li>
              {technologies.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <br></br>
            <h3 style={{ color: "#221e41" }}>Website</h3>
            <a
              style={{ fontSize: "11px", margin: "0", color: "#221e41" }}
              href="https://www.accedo.tv/"
              target="_blank"
              rel="noreferrer"
            >
              <ul style={{ color: "#221e41" }}>
                <li>accedo.tv</li>
              </ul>
            </a>
          </MiddleContent>
        </>
      )}
      <BottomContent></BottomContent>
    </>
  );
};
