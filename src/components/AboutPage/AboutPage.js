import React from "react";
import About from "../AboutPage/About/About";
import Facts from "./Facts/Facts";
import Footer from "../AboutPage/Footer/Footer";
import Resume from "./Resume/Resume";
import { FadeIn } from "./animations";

const AboutPage = () => {
  return (
    <FadeIn>
      {window.location.pathname === "/about" && (
        <>
          <About />
          <Facts />
          <Resume />
          <Footer />
        </>
      )}
    </FadeIn>
  );
};

export default AboutPage;
