import React from "react";
import styled from "styled-components";
import "./styles/nopagefound.css";
import { textColor } from "../../styles/GlobalStyles";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-size: 34px;
  background: ${textColor.primaryWhite};
`;

const StyledTitle = styled.h1`
  font-size: 140px;
  font-weight: 100;
  line-height: 80px;
  margin: 0;
  color: ${textColor.secondaryBlack};
`;

const StyledDescription = styled.h2`
  font-size: 37px;
  font-weight: 300;
  color: ${textColor.secondaryBlack};
`;

const NoPageFound = () => {
  return (
    <StyledWrapper>
      <StyledTitle className="text">404</StyledTitle>
      <StyledDescription> Page not found</StyledDescription>
    </StyledWrapper>
  );
};

export default NoPageFound;
