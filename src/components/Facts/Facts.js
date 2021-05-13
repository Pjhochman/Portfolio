import React from "react";
import factsImage from "../../assets/images/factsImage.png";
import { factsList } from "./data";
import styled from "styled-components";
import { FadeIn } from "./animations";
import "./styles/facts.css";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  height: autox;
`;

const StyledFactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 380px;
`;

const StyledFactsImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 350px;
`;

const Facts = props => {
  return (
    <FadeIn>
      <StyledContainer id="factSection" style={{ height: "40vw" }}>
        <StyledFactsImage className="facts" id="factsImage">
          <img
            src={factsImage}
            alt="The Good & The Bad"
            style={{
              width: "100%",
              boxShadow: "0 32px 40px -20px rgba(0, 0, 0, 0.25)"
            }}
          />
        </StyledFactsImage>
        <StyledFactsWrapper className="facts" id="factsList">
          <h1 id="randomFacts">Random facts</h1>
          <div>
            <ul id="list">
              {factsList.map(item => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
          {props.children}
        </StyledFactsWrapper>
      </StyledContainer>
    </FadeIn>
  );
};

export default Facts;
