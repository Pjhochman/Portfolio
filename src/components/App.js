import React, { useState } from "react";
import Cards from "./Cards/Cards";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Aside from "./Aside/Aside";
import About from "./About/About";
import Facts from "./Facts/Facts";
import Resume from "./Resume/Resume";
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

  return (
    <>
      <Header pageHandler={pageHandler} isPage={isPage} />
      <Section>
        {!isPage && (
          <>
            <Cards />
            <Aside />
          </>
        )}
      </Section>
      <Section className="about-page">
        {isPage && (
          <>
            <About />
            <Facts />
            <Resume />
            <Footer />
          </>
        )}
      </Section>
    </>
  );
};

export default App;
