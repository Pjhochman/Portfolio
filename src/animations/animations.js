import styled, { keyframes } from 'styled-components';
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInUpBig,
  fadeInDownBig,
} from 'react-animations';

export const fadeInAnimation = keyframes`${fadeIn}`;
export const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
export const fadeInRightAnimation = keyframes`${fadeInRight}`;
export const fadeInUpAnimation = keyframes`${fadeInUpBig}`;
export const fadeInDownAnimation = keyframes`${fadeInDownBig}`;
export const StartAnimation = styled.div`
  animation: 1.2s ${(props) => props.startAnimation};
`;
