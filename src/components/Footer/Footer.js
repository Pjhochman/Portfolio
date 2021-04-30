import React from "react";
import styled from "styled-components";

import "./footer.css";

const Container = styled.div`
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

const NameWrapper = styled.div`
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
      <Container>
        <NameWrapper className="contact1">
          <p id="by">2021 Peter Hochman</p>
        </NameWrapper>
      </Container>
    </footer>
  );
};

export default Footer;
