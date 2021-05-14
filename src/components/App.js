import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";

import styled from "styled-components";
import "../styles/css/app.css";

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [isPage, setPage] = useState(false);
  const pageHandler = () => setPage(value => !value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header pageHandler={pageHandler} isPage={isPage} />
      <Section>{!isPage && <HomePage />}</Section>
      <Section className="about-page">{isPage && <AboutPage />}</Section>
    </>
  );
};

export default App;
