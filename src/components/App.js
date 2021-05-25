import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
// import NoPageFound from './NoPageFound/NoPageFound';
import StyledGradient from './gradient';
import '../styles/css/app.css';

const App = () => {
  const Canonical = (props) => (
    <Helmet>
      <link rel="canonical" href={props} />
    </Helmet>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledGradient>
      <BrowserRouter>
        <Header />
        <Routes>
          <HelmetProvider>
            <Canonical props="https://www.peterhochman.com" />
            <Route path="/" element={<HomePage />} />
          </HelmetProvider>
          <HelmetProvider>
            <Canonical props="https://www.peterhochman.com/about" />
            <Route path="/about" element={<AboutPage />} />
          </HelmetProvider>
        </Routes>
      </BrowserRouter>
    </StyledGradient>
  );
};

export default App;
