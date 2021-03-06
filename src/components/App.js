/* eslint-disable */ 
import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import data from "./data.json"
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import NoPageFound from './NoPageFound/NoPageFound';
import StyledGradient from './gradient';
import '../styles/css/app.css';

const App = () => {
  const Canonical = ({ props }) => (
    <Helmet>
      <link rel="canonical" href={props.home || props.about} />
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
            <Canonical props={{ home: data.home.href }} />
            <Route path="/" element={<HomePage />} />
          </HelmetProvider>
          <HelmetProvider>
            <Canonical props={{ about: data.about.href }} />
            <Route path="/about" element={<AboutPage />} />
          </HelmetProvider>
            <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </StyledGradient>
  );
};

export default App;
