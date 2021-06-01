import React from 'react';
import PropTypes from 'prop-types';
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

const Cards = ({ click }) => {
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
    <>
    <div className="items">
      <div className='items__inner' id="js-scene">
        <CardItem
          dataDepth={data[0].dataDepth}
          dataTitle={data[0].dataTitle}
          click={click}
          transform='items__item transform1'
          startAnimation={width > mediaWidth ? fadeInLeftAnimation : fadeInAnimation}
          wait={600}
        >
          <ColorPalette />
        </CardItem>
        <CardItem
          dataDepth={data[1].dataDepth}
          dataTitle={data[1].dataTitle}
          transform='items__item transform2'
          click={click}

          startAnimation={width > mediaWidth ? fadeInRightAnimation : fadeInAnimation}  
          wait={600}
        >
          <HyperIsland />
        </CardItem>
        <CardItem
          dataDepth={data[2].dataDepth}
          dataTitle={data[2].dataTitle}
          transform='items__item transform3'
          click={click}

          startAnimation={width > mediaWidth ? fadeInUpAnimation : fadeInAnimation}  
          wait={700}
        >
          <Project11 />
        </CardItem>
        <CardItem
          dataDepth={data[3].dataDepth}
          dataTitle={data[3].dataTitle}
          transform='items__item transform4'
          click={click}

          startAnimation={width > mediaWidth ? fadeInDownAnimation : fadeInAnimation}  
          wait={700}
        >
          <BandPlanner />
        </CardItem>
        <CardItem 
          dataDepth={data[4].dataDepth}
          dataTitle={data[4].dataTitle}
          transform='items__item transform5'
          click={click}

          startAnimation={fadeInAnimation}
          wait={0}
          >
            <Accedo />
        </CardItem>
      </div>
    </div>
    </>
  );
};

Cards.propTypes = {
  click : PropTypes.bool.isRequired
}

export default Cards;
