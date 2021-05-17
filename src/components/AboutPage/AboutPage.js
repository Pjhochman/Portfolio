import React from "react";
import About from "../AboutPage/About/About";
import Facts from "./Facts/Facts";
import Footer from "../AboutPage/Footer/Footer";
import Resume from "./Resume/Resume";

const AboutPage = () => {
  return (
    <>
      {window.location.pathname === "/about" && (
        <>
          <About />
          <Facts />
          <Resume />
          <Footer />
        </>
      )}
    </>
  );
};

export default AboutPage;
