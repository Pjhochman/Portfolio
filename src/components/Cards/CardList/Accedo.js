import React, { useContext } from "react";
import { CardItemContext } from "../CardItem";

const technologies = [
  "Validation - Insomnia",
  "Design system - Zeplin",
  "Source control - GitHub",
  "Tools - Visual Studio Code",
  "Work - Managed through Jira",
  "Cypress - E2E Testing Framework",
  "Build & Deploy - Jenkins Pipeline with Docker"
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h3 style={{ color: "#221e41" }}>Product Description</h3>
              <p
                id="accedo-description"
                style={{ lineHeight: "15px", color: "#221e41", width: "90%" }}
              >
                Accedo One is a SaaS (Softare as a service) solution that
                provides content owners and brands with the ability to build,
                launch, and scale video streaming services.
              </p>
            </div>
            <br></br>
            <div>
              <h3 style={{ color: "#221e41" }}>Technologies & Tools</h3>
              <ul style={{ color: "#221e41", textAlign: "center" }}>
                <li>React with GraphQL</li>
                {technologies.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <br></br>
            <div>
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
            </div>
          </MiddleContent>
        </>
      )}
      <BottomContent></BottomContent>
    </>
  );
};
