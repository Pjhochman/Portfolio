import React, { useState, useEffect } from "react";
import { useHover } from "./hooks/useHover";
import { CardItemContext } from "../../layout/styles";
import { useWindowSize } from "./hooks/useWindowSize";
import PropTypes from "prop-types";
import {
  TopContainer,
  MiddleContainer,
  BottomContainer,
  TopTitle,
  TopDescription,
  MiddleTitle,
  MiddleDescription,
  BottomTitle,
  BottomDescription,
  Link
} from "../../layout/styles";
import { StartAnimation } from "../../animations/animations";
import "./cards.css";

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
              TopContent: TopContainer,
              MiddleContent: MiddleContainer,
              BottomContent: BottomContainer,
              TopTitle: TopTitle,
              BottomTitle: BottomTitle,
              MiddleTitle: MiddleTitle,
              MiddleDescription: MiddleDescription,
              TopDescription: TopDescription,
              BottomDescription: BottomDescription,
              Link: Link,
              isExpanded
            }}
          >
            {width > mediaWidthMobile
              ? isExpanded
                ? props.children
                : cardHovered && props.children
              : props.children}
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
