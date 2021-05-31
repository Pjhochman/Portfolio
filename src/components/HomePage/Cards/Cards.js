import React from 'react';
import Parallax from 'parallax-js';
import { data } from './data/data.json';
import CardItem from './CardItem';
import ColorPalette from './CardList/ColorPalette';
import Project11 from './CardList/Project11';
import HyperIsland from './CardList/HyperIsland';
import BandPlanner from './CardList/BandPlanner';
import Accedo from './CardList/Accedo';
import useWindowSize from '../../../hooks/useWindowSize';
import {
  fadeInUpAnimation,
  fadeInDownAnimation,
  fadeInLeftAnimation,
  fadeInRightAnimation,
  fadeInAnimation,
} from '../../../animations/animations';
import './styles/cards.css';

const Cards = () => {
  const mediaWidth = 1110;
  const { width } = useWindowSize();
  const scene = document.getElementById('js-scene');

  if (width) {
    /* eslint-disable */ 
    width > mediaWidth
      ? new Parallax(scene, { hoverOnly: false })
      : new Parallax(scene, { scalarX: '0', scalarY: '0' });
  }
  return (
    <div className="items">
      <div className='items__inner' id="js-scene">
        <CardItem
          dataDepth={data[0].dataDepth}
          dataTitle={data[0].dataTitle}
          startAnimation={width > mediaWidth ? fadeInLeftAnimation : fadeInAnimation}
          wait={width > mediaWidth ? 600 : 900}
        >
          <ColorPalette />
        </CardItem>
        <CardItem
          dataDepth={data[1].dataDepth}
          dataTitle={data[1].dataTitle}
          startAnimation={width > mediaWidth ? fadeInRightAnimation : fadeInAnimation}  
          wait={width > mediaWidth ? 600 : 700}
        >
          <HyperIsland />
        </CardItem>
        <CardItem
          dataDepth={data[2].dataDepth}
          dataTitle={data[2].dataTitle}
          startAnimation={width > mediaWidth ? fadeInUpAnimation : fadeInAnimation}  
          wait={width > mediaWidth ? 700 : 500}
        >
          <Project11 />
        </CardItem>
        <CardItem
          dataDepth={data[3].dataDepth}
          dataTitle={data[3].dataTitle}
          startAnimation={width > mediaWidth ? fadeInDownAnimation : fadeInAnimation}  
          wait={width > mediaWidth ? 700 : 300}
        >
          <BandPlanner />
        </CardItem>
        <CardItem 
          dataDepth={data[4].dataDepth}
          dataTitle={data[4].dataTitle}
          startAnimation={fadeInAnimation}
          wait={width > mediaWidth ? 0 : 100}>
            <Accedo />
        </CardItem>
      </div>
    </div>
  );
};

export default Cards;
