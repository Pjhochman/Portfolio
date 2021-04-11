import React, { useEffect } from "react";
import Cards from "./Cards/Cards";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Parallax from "parallax-js";
import "../styles/css/app.css";

const App = () => {
  useEffect(() => {
    const scene = document.getElementById("js-scene");
    new Parallax(scene);
  }, []);
  return (
    <>
      <Header />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
