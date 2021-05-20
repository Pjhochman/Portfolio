import React from "react";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";

const routes = {
  "/": () => <HomePage />,
  "/about/": () => <AboutPage />
};

export default routes;
