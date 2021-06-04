import React, { useState, useEffect } from 'react';
import Cards from './Cards/Cards';
import Aside from './Aside/Aside';
import useWindowSize from '../../hooks/useWindowSize';

const HomePage = () => {
  const mediaWidthTablet = 1100;
  const { width } = useWindowSize();
  const [counter, setCounter] = useState(3);
  const clickHandler = () => {
    if (counter === 3) {
      return setCounter(0);
    }
    return setCounter((value) => value + 1);
  };

  useEffect(() => {
    if (width > mediaWidthTablet) {
      setCounter(3);
    }
  },
  [width]);

  return (
    <>
      <Cards counter={counter} />
      <Aside clickHandler={clickHandler} />
    </>
  );
};
export default HomePage;
