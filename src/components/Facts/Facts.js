import React, { useEffect } from "react";
import styled from "styled-components";
import factsImage from "../../assets/images/factsImage.png";
import "../../styles/css/facts.css";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  height: 350px;
`;

const FactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 350px;
`;

const FactsImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 350px;
`;

const Facts = props => {
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
      <FactsImage>
        <img
          src={factsImage}
          alt="Logo"
          style={{
            height: "100%",
            boxShadow: "0 32px 40px -20px rgba(0, 0, 0, 0.25)"
          }}
        />
      </FactsImage>
      <FactsWrapper>
        <h1 id="randomFacts">Random facts</h1>
        <div>
          <ul id="list">
            <li>I drink a lot of coffee</li>
            <li>I'm into interior design</li>
            <li>I love to eat (not so much cooking)</li>
            <li>I'm a bit of a clean freak</li>
            <li>I want to live in New Orleans</li>
            <li>I worship Bill Evans</li>
            <li>I'm addicted to 'semla' buns</li>
          </ul>
        </div>
        {props.children}
      </FactsWrapper>
    </Container>
  );
};

export default Facts;
