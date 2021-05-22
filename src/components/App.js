import React, { useEffect } from 'react';
import { useRoutes, A } from 'hookrouter';
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
      <StyledGradient width={path === '/' && '100vw'} />
      {(routeResult && (
        <Header>
          <A href="/" />
          <A href="/about" />
        </Header>
      )) || <NoPageFound />}
      <HomePage />
      <AboutPage />
    </>
  );
};

export default App;
