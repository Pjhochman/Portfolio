import styled, { keyframes } from "styled-components";
import { fadeIn, fadeInLeft, fadeInRight } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const StartAnimation = styled.div`
  animation: 1.2s ${props => props.startAnimation};
`;

export const FadeInAnimation = styled.div`
  animation: 0.3s ${fadeInAnimation};
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
