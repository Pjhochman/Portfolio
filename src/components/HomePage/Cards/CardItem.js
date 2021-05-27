import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useHover from '../../../hooks/useHover';
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
import useWindowSize from '../../../hooks/useWindowSize';

import { StartAnimation } from '../../../animations/animations';
import './styles/cards.css';

const CardItem = ({
  children, wait, startAnimation, dataDepth, dataTitle,
}) => {
  const mediaWidthTablet = 768;
  const [refCard, cardHovered] = useHover();
  const { width } = useWindowSize();
  const [isVisible, setVisible] = useState(false);
  const [isExpanded, setExpand] = useState(false);

  const expandHandler = () => setExpand((value) => !value);

  useEffect(() => {
    if (width > mediaWidthTablet) {
      setVisible((value) => !value);
    } else {
      setTimeout(() => {
        setVisible((value) => !value);
      }, wait);
    }
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
    <div
      className={
        isExpanded ? 'items__layer layer active' : 'items__layer layer'
      }
      data-depth={dataDepth}
      ref={refCard}
    >
      {isVisible && (
        <StartAnimation
          startAnimation={width > mediaWidthTablet && startAnimation}
          className={isExpanded ? 'items__item active' : 'items__item'}
          data-title={dataTitle}
          onClick={expandHandler}
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
            }}
          >
            {delayCardText()}
          </CardItemContext.Provider>
        </StartAnimation>
      )}
    </div>
  );
};

CardItem.propTypes = {
  dataDepth: PropTypes.string.isRequired,
  dataTitle: PropTypes.string.isRequired,
  startAnimation: PropTypes.shape(PropTypes.obj).isRequired,
  wait: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default CardItem;
