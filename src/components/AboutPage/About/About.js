import React from 'react';
import styled from 'styled-components';
import LazyImage from '../../Images/LazyImage';
import FadeIn from '../animations';
import profileImage from '../../../assets/images/profileImage.webp';
import altImage from '../../../assets/images/profileImage_small.png';
import './styles/about.css';

const StyledContainer = styled.div`
  cursor: default;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  height: 45vw;
`;

const StyledAboutWrapper = styled.div`
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

const About = () => (
  <FadeIn>
    <StyledContainer className="container">
      <StyledAboutWrapper className="about" id="profileInformation">
        <h1 id="aboutMe">about me</h1>
        <h2 id="intro">
          I&#39;m a Frontend developer
          <br />
          based in Stockholm, Sweden.
        </h2>
        <p id="paragraph">
          I enjoy turning complex problems into simple, beautiful and
          intuitive designs. When I&#39;m not pushing pixels, you&#39;ll find
          me playing the piano, listening to jazz, blues, funk and enjoying
          walks with my dog.
        </p>
      </StyledAboutWrapper>
      <LazyImage src={profileImage} alt={altImage} />
    </StyledContainer>
  </FadeIn>
);
export default About;
