import styled from 'styled-components';
import {
  fadeInAnimation,
  fadeInRightAnimation,
  fadeInLeftAnimation,
} from '../../../animations/animations';

export const FadeIn = styled.div`
  animation: 0.5s ${fadeInAnimation};
`;

export const FadeInRight = styled.div`
  animation: 0.8s ${fadeInRightAnimation};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  max-height: 145px;
  @media (max-width: 1100px) {
    width: 190px;
    margin: 2px 0 0 7px;
    font-size: 13px;
    &__container {
      padding: 0;
      &__text {
        font-size: 13px;
      }
    }
  }
`;

export const FadeInLeft = styled.div`
  animation: 0.8s ${fadeInLeftAnimation};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
`;
