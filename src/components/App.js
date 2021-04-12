import React, { useEffect } from "react";
import Cards from "./Cards/Cards";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import Parallax from "parallax-js";
import styled from "styled-components";
import "../styles/css/app.css";

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  useEffect(() => {
    const scene = document.getElementById("js-scene");
    new Parallax(scene);
  }, []);
  return (
    <>
      <Section>
        <Header />
        <Cards />
        <Aside />
      </Section>
      <Section>
        <Main />
      </Section>
    </>
  );
};

export default App;
