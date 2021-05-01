import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import "./cards.css";
import { useHover } from "./hooks/useHover";
import "./cards.css";
import {
  fadeIn,
  fadeOut,
  fadeInLeft,
  fadeInRight,
  slideOutLeft,
  slideOutRight,
  slideInUp
} from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const slideInLeftAnimation = keyframes`${fadeInLeft}`;
const slideInRightAnimation = keyframes`${fadeInRight}`;
const slideOutLeftAnimation = keyframes`${slideOutLeft}`;
const slideOutRightAnimation = keyframes`${slideOutRight}`;

export const CardItemContext = React.createContext({
  TopContent: null,
  MiddleContent: null,
  BottomContent: null,
  TopTitle: null,
  BottomTitle: null,
  Description: null
});

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 20px 20px 0px 20px;
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;
`;

const MiddleContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  font-size: 11px;
  font-weight: 200;
  color: white;
  box-sizing: border-box;
  user-select: none;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  pointer-events: none;
`;

const TopTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 9px;
  font-weight: 200;
  color: white;
`;

const BottomTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 9px;
  font-weight: 200;
  color: white;
`;

const TopDescription = styled.div`
  width: 70%;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 5px;
  font-size: 9px;
  font-weight: 400;
  color: white;
`;

const BottomDescription = styled.div`
  width: 200px;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 15px;
  font-size: 9px;
  font-weight: 400;
  text-align: end;
  color: white;
`;

const CloseButton = styled.svg`
  width: 15px;
  height: auto;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

const StartAnimation = styled.div`
  animation: 1.2s ${props => props.startAnimation};
`;

const FadeIn = styled.div`
  animation: ${fadeInAnimation};
`;

const FadeOut = styled.div`
  animation: 1s ${fadeOutAnimation};
`;

const SlideInUp = styled.div`
  animation: ${slideInUpAnimation};
`;

const SlideInLeft = styled.div`
  animation: ${slideInLeftAnimation};
  display: flex;
  justify-content: flex-end;
  width: 50px;
  white-space: nowrap;
`;

const SlideOutLeft = styled.div`
  animation: ${slideOutLeftAnimation};
`;

const SlideInRight = styled.div`
  animation: ${slideInRightAnimation};
  width: 80px;
  white-space: nowrap;
`;

const SlideOutRight = styled.div`
  animation: ${slideOutRightAnimation};
`;

const CardItem = ({
  children,
  dataDepth,
  dataTitle,
  startAnimation,
  mouseOver,
  mouseOut,
  wait
}) => {
  const [refCard, cardHovered] = useHover();
  const [isVisible, setVisible] = useState(false);
  const [isExpanded, setExpand] = useState(false);
  const [width, setWidth] = useState();

  const expandHandler = () => setExpand(value => !value);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setTimeout(() => {
      setVisible(value => !value);
    }, wait);
  }, [wait]);

  return (
    <div
      className="items__layer layer"
      data-depth={dataDepth}
      ref={refCard}
      style={isExpanded ? { zIndex: "1" } : null}
    >
      {isVisible && (
        <StartAnimation
          startAnimation={startAnimation}
          className="items__item"
          data-title={dataTitle}
          style={
            isExpanded
              ? {
                  width: width > "637" ? "515px" : "316px",
                  height: width > "637" ? "590px" : "65vh",
                  left: "0",
                  top: width > "637" ? "0" : "50px",
                  zIndex: "1"
                }
              : null
          }
          onClick={expandHandler}
        >
          <CardItemContext.Provider
            value={{
              CloseButton: CloseButton,
              TopContent: TopContainer,
              MiddleContent: MiddleContainer,
              BottomContent: BottomContainer,
              TopTitle: TopTitle,
              BottomTitle: BottomTitle,
              TopDescription: TopDescription,
              BottomDescription: BottomDescription,
              FadeIn: FadeIn,
              FadeOut: FadeOut,
              SlideInUp: SlideInUp,
              SlideInRight: SlideInRight,
              SlideOutRight: SlideOutRight,
              SlideInLeft: SlideInLeft,
              SlideOutLeft: SlideOutLeft,
              isExpanded
            }}
          >
            {width > "637"
              ? isExpanded
                ? children
                : cardHovered && children
              : children}
          </CardItemContext.Provider>
        </StartAnimation>
      )}
    </div>
  );
};

// width > "637" ? (isExpanded ? children : cardHovered && children) : children;

export default CardItem;
