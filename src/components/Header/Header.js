import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInDownAnimation = keyframes`${fadeIn}`;

const FadeInDown = styled.div`
  animation: 1.5s ${fadeInDownAnimation};
`;

const Header = () => {
  const [hover, setHover] = useState({ display: "none" });
  const onHover = () => {
    setHover({ display: "none" });
    console.log("visible");
  };
  const onLeave = () => {
    setHover({ display: "none" });
  };
  return (
    <FadeInDown>
      <header>
        <div
          className="information-container"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <h1 id="name">Peter Hochman</h1>
          <h1 id="profession">Junior Front End Developer</h1>

          <div className="aboutMe-container" style={hover}>
            <div>
              <p className="slide-up">
                <span className="green">Hello there</span>,
              </p>
            </div>
            <div>
              <p className="slide-up">
                {" "}
                I enjoy turning complex problems into simple, beautiful and
                intuitive designs.
              </p>
            </div>
            <div>
              <p className="slide-up">
                {" "}
                When I'm not pushing pixels, you'll find me playing piano,
                listening to jazz or playing video games.
              </p>
            </div>
          </div>
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
