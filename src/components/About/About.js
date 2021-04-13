import React, { useEffect } from "react";
import styled from "styled-components";
import profileImage from "../../assets/images/profileImage.png";

import "../../styles/css/about.css";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  height: 380px;
`;

const AboutWrapper = styled.div`
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

const ProfileImage = styled.div`
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 380px;
`;

const About = props => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <Container
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <AboutWrapper>
        <h1 id="aboutMe">about me</h1>
        <h2 id="intro">
          I'm a Frontend developer
          <br /> based in Stockholm, Sweden.
        </h2>
        <p id="paragraph">
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. When I'm not pushing pixels, you'll find me playing the
          piano, listening to jazz, blues funk and enjoying walks with my dog.
        </p>
        {props.children}
      </AboutWrapper>
      <ProfileImage>
        <img
          src={profileImage}
          alt="Logo"
          style={{
            height: "90%"
          }}
        />
      </ProfileImage>
    </Container>
  );
};

export default About;
