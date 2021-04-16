import React, { useEffect } from "react";
import Cards from "./Cards/Cards";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Aside from "./Aside/Aside";
import About from "./About/About";
import Facts from "./Facts/Facts";
import Resume from "./Resume/Resume";
import Parallax from "parallax-js";
import styled from "styled-components";

import "../styles/css/app.css";

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const mediaQuery = window.matchMedia("(max-width: 1250px)");

const App = () => {
  useEffect(() => {
    const scene = document.getElementById("js-scene");
    if (!mediaQuery.matches) {
      new Parallax(scene);
    }
  }, []);
  return (
    <>
      <Section className="section1">
        <Header />
        <Cards />
        <Aside />
      </Section>
      <Section
        className="section2 sections"
        style={{ margin: " 50px 0 160px 0" }}
      >
        <About />
      </Section>
      <Section
        className="section3 sections"
        style={{ margin: " 50px 0 0px 0" }}
      >
        <Facts />
      </Section>
      <Section className="section4 sections resume " style={{ margin: "0" }}>
        <Resume />
      </Section>
      <Section
        style={{
          margin: "0",
          boxShadow: "inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff"
        }}
      >
        <Footer />
      </Section>
    </>
  );
};

export default App;
