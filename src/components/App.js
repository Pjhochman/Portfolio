import React, { useEffect } from 'react';
import { useRoutes, A } from 'hookrouter';
import { Helmet } from 'react-helmet';
import routes from '../routes';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import NoPageFound from './NoPageFound/NoPageFound';
import StyledGradient from './gradient';
import '../styles/css/app.css';

const path = window.location.pathname;

const App = () => {
  const routeResult = useRoutes(routes);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StyledGradient width={path === '/' ? 'true' : null} />
      {(routeResult && (
        <Header>
          <Helmet>
            <link rel="canonical" href="https://www.peterhochman.com" />
            <A href="/" />
          </Helmet>
          <Helmet>
            <link rel="canonical" href="https://www.peterhochman.com/about" />
            <A href="/about" />
          </Helmet>
        </Header>
      )) || <NoPageFound />}
      <HomePage />
      <AboutPage />
    </>
  );
};

export default App;
