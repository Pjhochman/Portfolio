import styled from 'styled-components';
import {
  fadeInAnimation,
  fadeInLeftAnimation,
  fadeInRightAnimation,
} from '../../../animations/animations';

export const FadeInAnimation = styled.div`
  animation: ${(props) => props.duration} ${fadeInAnimation};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FadeInLeftAnimation = styled.div`
  animation: ${(props) => props.duration} ${fadeInLeftAnimation};
  width: auto;
`;

export const FadeInRightAnimation = styled.div`
  animation: ${(props) => props.duration} ${fadeInRightAnimation};
  width: auto;
  white-space: nowrap;
`;
