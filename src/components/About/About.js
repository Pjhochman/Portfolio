import React from "react";
import "./about.css";
import profileImage from "../../assets/images/profileImage.png";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 1.2s ${fadeInAnimation};
`;

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
  align-items: center;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 380px;
`;

const ProfileImage = styled.div`
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
  return (
    <FadeIn>
      <Container
        className="container"
        style={{ height: "45vw", paddingTop: "10vh" }}
      >
        <AboutWrapper className="about" id="profileInformation">
          <h1 id="aboutMe">about me</h1>
          <h2 id="intro">
            I'm a Frontend developer
            <br /> based in Stockholm, Sweden.
          </h2>
          <p id="paragraph">
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. When I'm not pushing pixels, you'll find me
            playing the piano, listening to jazz, blues funk and enjoying walks
            with my dog.
          </p>
          {props.children}
        </AboutWrapper>
        <ProfileImage className="about" id="profileImage">
          <img
            src={profileImage}
            alt="Logo"
            style={{
              height: "100%"
            }}
          />
        </ProfileImage>
      </Container>
    </FadeIn>
  );
};

export default About;
