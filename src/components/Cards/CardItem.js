import React, { useState, useEffect } from "react";
import { useHover } from "../../hooks/useHover";
import { CardItemContext } from "./Context/cardContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import PropTypes from "prop-types";
import {
  StyledTopContainer,
  StyledTopTitle,
  StyledTopDescription,
  StyledMiddleContainer,
  StyledBottomContainer,
  StyledMiddleTitle,
  StyledMiddleDescription,
  StyledBottomTitle,
  StyledBottomDescription,
  StyledLink
} from "./Context/cardContext";
import { StartAnimation } from "../../animations/animations";
import "./styles/cards.css";

export const ExpandContext = React.createContext({
  isExpanded: null
});

const CardItem = props => {
  const mediaWidthMobile = 637;
  const [refCard, cardHovered] = useHover();
  const { width } = useWindowSize();
  const [isVisible, setVisible] = useState(false);
  const [isExpanded, setExpand] = useState(false);

  const expandHandler = () => setExpand(value => !value);

  useEffect(() => {
    setTimeout(() => {
      setVisible(value => !value);
    }, props.wait);
  }, [props.wait]);

  const delayCardText = () => {
    if (width > mediaWidthMobile) {
      if (cardHovered || isExpanded) {
        return props.children;
      }
    } else {
      return props.children;
    }
  };

  return (
    <div
      className="items__layer layer"
      data-depth={props.dataDepth}
      ref={refCard}
      style={isExpanded ? { zIndex: "1" } : null}
    >
      {isVisible && (
        <StartAnimation
          startAnimation={props.startAnimation}
          className={isExpanded ? "items__item__active" : "items__item"}
          data-title={props.dataTitle}
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
              Link: StyledLink,
              isExpanded
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
  dataDepth: PropTypes.string,
  dataTitle: PropTypes.string,
  startAnimation: PropTypes.object
};

export default CardItem;
