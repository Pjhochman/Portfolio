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
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </StyledGradient>
  );
};

export default App;
