import React from "react";
import factsImage from "../../assets/images/factsImage.png";
import "./facts.css";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 1.2s ${fadeInAnimation};
`;

const factsList = [
  "I drink a lot of coffee",
  "I'm into interior design",
  "I love to eat (not so much cooking)",
  "I'm a bit of a clean freak",
  "I want to live in New Orleans",
  "I worship Bill Evans",
  "I'm addicted to 'semla' buns"
];

const Container = styled.div`
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

const FactsWrapper = styled.div`
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

const FactsImage = styled.div`
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
      <Container id="factSection" style={{ height: "45vw" }}>
        <FactsImage className="facts" id="factsImage">
          <img
            src={factsImage}
            alt="The Good & The Bad"
            style={{
              width: "100%",
              boxShadow: "0 32px 40px -20px rgba(0, 0, 0, 0.25)"
            }}
          />
        </FactsImage>
        <FactsWrapper className="facts" id="factsList">
          <h1 id="randomFacts">Random facts</h1>
          <div>
            <ul id="list">
              {factsList.map(item => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
          {props.children}
        </FactsWrapper>
      </Container>
    </FadeIn>
  );
};

export default Facts;
