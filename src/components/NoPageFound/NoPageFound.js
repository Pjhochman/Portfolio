import React from 'react';
import styled from 'styled-components';
import './styles/nopagefound.css';
import textColor from '../../styles/GlobalStyles';

const StyledWrapper = styled.div`
  position: relative;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-size: 34px;
  background: transparent;
`;

const StyledTitle = styled.h1`
  font-size: 140px;
  font-weight: 100;
  line-height: 80px;
  margin: 0;
  color: ${textColor.secondaryBlack};
`;

const StyledDescription = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 300;
  color: ${textColor.secondaryBlack};
`;

const StyledLink = styled.a`
  font-size: 12px;
  font-weight: bold;
  padding: 15px;
  margin-top: 20px;
  text-transform: uppercase;
  color: ${textColor.secondaryBlack};
  border-radius: 20px;
  box-shadow: -5px -5px 20px #757c78, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px #757c78, 2px 2px 5px #babecc;
  }
`;

const NoPageFound = () => (
  <StyledWrapper>
    <StyledTitle className="text">404</StyledTitle>
    <StyledDescription fontSize="37px"> Page not found</StyledDescription>
    <StyledDescription fontSize="20px">
      Sorry, the page you&#39;re looking for doesn&#39;t exist.
    </StyledDescription>
    <StyledLink href="/">return home</StyledLink>
  </StyledWrapper>
);

export default NoPageFound;
