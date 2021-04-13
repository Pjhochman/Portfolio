import React from "react";
import "../../styles/css/header.css";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInDownAnimation = keyframes`${fadeIn}`;

const FadeInDown = styled.div`
  animation: 1.5s ${fadeInDownAnimation};
`;

const Header = () => {
  return (
    <FadeInDown>
      <header>
        <div className="information-container">
          <h1 id="name">Peter Hochman</h1>
          <h1 id="profession">Front End Developer</h1>
        </div>
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
      </header>
    </FadeInDown>
  );
};

export default Header;
