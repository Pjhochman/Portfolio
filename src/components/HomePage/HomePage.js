import React, { useState } from 'react';
import Cards from './Cards/Cards';
import Aside from './Aside/Aside';

const HomePage = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick((value) => !value);
  };
  return (
    <>
      <Cards click={click} />
      <Aside clickHandler={clickHandler} />
    </>
  );
};
export default HomePage;
