import React from "react";
import LazyImage from "../../Images/LazyImage";
import styled from "styled-components";
import { FadeIn } from "./animations";
import factsImage from "../../../assets/images/factsImage.png";
import altImage from "../../../assets/images/factsImage_small.png";
import { factsList } from "./data";
import "./styles/facts.css";

const StyledContainer = styled.div`
  cursor: default;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 100%;
  height: 40vw;
  margin: auto;
`;

const StyledFactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  left: 0;
  right: 0;
  width: 380px;
  height: 380px;
  margin: auto;
`;

const Facts = props => {
  return (
    <FadeIn>
      <StyledContainer id="factSection">
        <LazyImage src={factsImage} alt={altImage} />
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