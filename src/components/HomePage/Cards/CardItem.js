import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledCards from './TransformCards';
import useHover from '../../../hooks/useHover';
import useWindowSize from '../../../hooks/useWindowSize';
import {
  CardItemContext,
  StyledTopContainer,
  StyledTopTitle,
  StyledTopDescription,
  StyledMiddleContainer,
  StyledBottomContainer,
  StyledMiddleTitle,
  StyledMiddleDescription,
  StyledBottomTitle,
  StyledBottomDescription,
  StyledButton,
} from './Context/cardContext';
import { StartAnimation } from '../../../animations/animations';
import './styles/cards.css';

const CardItem = ({
  children, wait, startAnimation, dataDepth, dataTitle, transform, click,
}) => {
  const mediaWidthTablet = 637;
  const [refCard, cardHovered] = useHover();
  const { width } = useWindowSize();
  const [isVisible, setVisible] = useState(false);
  const [isExpanded, setExpand] = useState(false);
  const expandHandler = (prop) => (!prop && setExpand(false));

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const randomWidth = randomInt(50, 400);
  const randomHeight = randomInt(50, 300);
  const randomTransform = randomInt(-10, -10);
  const randomRadius = randomInt(100, 100);

  useEffect(() => {
    setTimeout(() => {
      setVisible((value) => !value);
    }, wait);
  }, [wait]);

  const delayCardText = () => {
    if (width > mediaWidthTablet) {
      if (cardHovered || isExpanded) {
        return children;
      }
    } else {
      return children;
    }
    return null;
  };
  return (
    <StyledCards
      randomWidth={randomWidth}
      randomHeight={randomHeight}
      randomTransform={randomTransform}
      randomRadius={randomRadius}
      className={
        isExpanded ? 'items__layer layer active' : 'items__layer layer'
      }
      data-depth={dataDepth}
      ref={refCard}
    >
      {isVisible && (
        <StartAnimation
          startAnimation={startAnimation}
          /* eslint-disable */
          className={isExpanded ? 'items__item active' : click && !isExpanded ? `items__item ${transform}` : 'items__item'}
          data-title={dataTitle}
          onClick={!isExpanded ? () => setExpand(true) : expandHandler}
        >
          <CardItemContext.Provider
            value={{
              TopContent: StyledTopContainer,
              MiddleContent: StyledMiddleContainer,
              BottomContent: StyledBottomContainer,
              TopTitle: StyledTopTitle,
              BottomTitle: StyledBottomTitle,
              MiddleTitle: StyledMiddleTitle,
              MiddleDescription: StyledMiddleDescription,
              TopDescription: StyledTopDescription,
              BottomDescription: StyledBottomDescription,
              Button: StyledButton,
              isExpanded,
              expandHandler,
            }}
          >
            {delayCardText()}
          </CardItemContext.Provider>
        </StartAnimation>
      )}
    </StyledCards>
  );
};

CardItem.propTypes = {
  dataDepth: PropTypes.string.isRequired,
  dataTitle: PropTypes.string.isRequired,
  startAnimation: PropTypes.shape(PropTypes.obj).isRequired,
  wait: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  transform: PropTypes.string.isRequired,
  click: PropTypes.bool.isRequired,
};

export default CardItem;
