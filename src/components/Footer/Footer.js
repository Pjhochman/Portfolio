import React from "react";
import styled from "styled-components";
import "./styles/footer.css";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  height: 50px;
`;

const StyledNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 190px;
  margin: auto;
  height: 50px;
`;

const Footer = () => {
  return (
    <footer>
      <StyledContainer>
        <StyledNameWrapper className="contact1">
          <p id="by">&#xa9;&nbsp;2021 Peter Hochman</p>
        </StyledNameWrapper>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
