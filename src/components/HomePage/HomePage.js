import React from "react";
import Cards from "./Cards/Cards";
import Aside from "./Aside/Aside";

const HomePage = () => {
  return (
    <>
      {window.location.pathname === "/home/" && (
        <>
          <Cards />
          <Aside />
        </>
      )}
    </>
  );
};

export default HomePage;
