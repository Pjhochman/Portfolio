import React, { useEffect } from "react";
import { useRoutes, useRedirect, A } from "hookrouter";
import routes from "../routes";
import Header from "./Header/Header";
import HomePage from "../components/HomePage/HomePage";
import AboutPage from "../components/AboutPage/AboutPage";
import NoPageFound from "./NoPageFound/NoPageFound";
import "../styles/css/app.css";

const App = () => {
  const routeResult = useRoutes(routes);
  useRedirect("/", "/home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {(routeResult && <Header />) || <NoPageFound />}
      <A href={"/home"}>
        <HomePage />
      </A>
      <A href="/about">
        <AboutPage />
      </A>
    </>
  );
};

export default App;
