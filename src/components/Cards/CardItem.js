import React, { useState, useEffect } from "react";
import { useHover } from "./hooks/useHover";
import { CardItemContext } from "../../Layout/styles";
import { useWindowSize } from "./hooks/useWindowSize";
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
} from "../../Layout/styles";
import { StartAnimation } from "../../Animations/animations";
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
          className="items__item"
          data-title={props.dataTitle}
          style={
            isExpanded
              ? {
                  width: width > mediaWidthMobile ? "515px" : "316px",
                  height: width > mediaWidthMobile ? "590px" : "65vh",
                  left: "0",
                  top: width > mediaWidthMobile ? "0" : "30px",
                  zIndex: "1"
                }
              : null
          }
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

export default CardItem;
