import React from "react";
import styled from "styled-components";

import "../../styles/css/footer.css";

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

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 50px;
`;

const Footer = () => {
  return (
    <footer>
      <Container>
        <NameWrapper>
          <p id="by">2021 Peter Hochman</p>
        </NameWrapper>
        <a className="arrow-up" href="#linkedin">
          <span className="left-arm"></span>
          <span className="right-arm"></span>
          <span className="arrow-slide"></span>
        </a>
        <ContactWrapper>
          <div className="contact-container">
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/peter-hochman/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              id="github"
              href="https://github.com/Pjhochman"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a id="contact" href="mailto:peter.hochman.dev@gmail.com">
              Say Hi!
            </a>
          </div>
        </ContactWrapper>
      </Container>
    </footer>
  );
};

export default Footer;
