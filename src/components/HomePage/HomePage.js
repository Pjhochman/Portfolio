import React from 'react';
import Cards from './Cards/Cards';
import Aside from './Aside/Aside';

const HomePage = () => (
  <>
    {window.location.pathname === '/' && (
      <>
        <Cards />
        <Aside />
      </>
    )}
  </>
);

export default HomePage;
