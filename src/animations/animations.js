import styled, { keyframes } from "styled-components";
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInUpBig,
  fadeInDownBig
} from "react-animations";

export const fadeInAnimation = keyframes`${fadeIn}`;
export const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
export const fadeInRightAnimation = keyframes`${fadeInRight}`;
export const fadeInUpAnimation = keyframes`${fadeInUpBig}`;
export const fadeInDownAnimation = keyframes`${fadeInDownBig}`;
export const StartAnimation = styled.div`
  animation: 1.2s ${props => props.startAnimation};
`;

export const FadeInAnimation = styled.div`
  animation: ${props => (props.animation ? "0.7s" : "0.3s")} ${fadeInAnimation};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FadeInLeftAnimation = styled.div`
  animation: 0.3s ${fadeInLeftAnimation};
  width: auto;
`;

export const FadeInRightAnimation = styled.div`
  animation: 0.3s ${fadeInRightAnimation};
  width: auto;
  white-space: nowrap;
`;
