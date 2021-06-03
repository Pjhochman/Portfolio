import React, { useState } from 'react';
import Cards from './Cards/Cards';
import Aside from './Aside/Aside';

const HomePage = () => {
  const [counter, setCounter] = useState(3);
  const clickHandler = () => {
    if (counter === 3) {
      return setCounter(0);
    }
    return setCounter((value) => value + 1);
  };
  return (
    <>
      <Cards counter={counter} />
      <Aside clickHandler={clickHandler} />
    </>
  );
};
export default HomePage;
