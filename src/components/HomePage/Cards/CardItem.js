import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledCards from './TransformCards';
import useHover from '../../../hooks/useHover';
import useWindowSize from '../../../hooks/useWindowSize';
import { transformData } from './data/data.json';
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
  children, wait, startAnimation, dataDepth, dataTitle, transform, counter,
}) => {
  const mediaWidthTablet = 637;
  const [refCard, cardHovered] = useHover();
  const { width } = useWindowSize();
  const [isVisible, setVisible] = useState(false);
  const [isExpanded, setExpand] = useState(false);
  const expandHandler = (prop) => (!prop && setExpand(false));

  useEffect(() => {
    setTimeout(() => {
      setVisible((value) => !value);
    }, wait);
  }, [wait]);
  const delayCardText = () => {
    if (width > mediaWidthTablet) {
      if ((cardHovered && counter === 3) || isExpanded) {
        return children;
      }
    } else {
      return children;
    }
    return null;
  };
  return (
    <StyledCards
      accedoWidth={transformData[0].accedo.width[counter]}
      accedoHeight={transformData[0].accedo.height[counter]}
      accedoRadius={transformData[0].accedo.borderRadius[counter]}
      accedoTransform={transformData[0].accedo.transform[counter]}
      accedoTop={transformData[0].accedo.top[counter]}
      accedoLeft={transformData[0].accedo.left[counter]}
      bandPlannerWidth={transformData[0].bandPlanner.width[counter]}
      bandPlannerHeight={transformData[0].bandPlanner.height[counter]}
      bandPlannerRadius={transformData[0].bandPlanner.borderRadius[counter]}
      bandPlannerTransform={transformData[0].bandPlanner.transform[counter]}
      bandPlannerTop={transformData[0].bandPlanner.top[counter]}
      bandPlannerLeft={transformData[0].bandPlanner.left[counter]}
      colorPaletteWidth={transformData[0].colorPalette.width[counter]}
      colorPaletteHeight={transformData[0].colorPalette.height[counter]}
      colorPaletteRadius={transformData[0].colorPalette.borderRadius[counter]}
      colorPaletteTransform={transformData[0].colorPalette.transform[counter]}
      colorPaletteTop={transformData[0].colorPalette.top[counter]}
      colorPaletteLeft={transformData[0].colorPalette.left[counter]}
      projectWidth={transformData[0].project.width[counter]}
      projectHeight={transformData[0].project.height[counter]}
      projectRadius={transformData[0].project.borderRadius[counter]}
      projectTransform={transformData[0].project.transform[counter]}
      projectTop={transformData[0].project.top[counter]}
      projectLeft={transformData[0].project.left[counter]}
      hyperWidth={transformData[0].hyperIsland.width[counter]}
      hyperHeight={transformData[0].hyperIsland.height[counter]}
      hyperRadius={transformData[0].hyperIsland.borderRadius[counter]}
      hyperTransform={transformData[0].hyperIsland.transform[counter]}
      hyperTop={transformData[0].hyperIsland.top[counter]}
      hyperLeft={transformData[0].hyperIsland.left[counter]}
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
          className={isExpanded ? 'items__item active' :  counter !== 3 ? `items__item ${transform}` : 'items__item'}
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
  counter: PropTypes.number.isRequired,
};

export default CardItem;
