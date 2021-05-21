import React, { useEffect } from "react";
import { useRoutes, useRedirect, A } from "hookrouter";
import routes from "../routes";
import Header from "./Header/Header";
import HomePage from "../components/HomePage/HomePage";
import AboutPage from "../components/AboutPage/AboutPage";
import NoPageFound from "./NoPageFound/NoPageFound";
import { StyledGradient } from "./gradient";
import "../styles/css/app.css";

const App = () => {
  const routeResult = useRoutes(routes);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {(routeResult && (
        <Header>
          <A href="/"></A>
          <A href="/about"></A>
        </Header>
      )) || <NoPageFound />}

      <StyledGradient height="100vh">
        <HomePage />
      </StyledGradient>

      <StyledGradient height="auto">
        <AboutPage />
      </StyledGradient>
    </>
  );
};

export default App;
