import styled from "styled-components";
import {
  fadeInAnimation,
  fadeInLeftAnimation,
  fadeInRightAnimation
} from "../../animations/animations";

export const FadeInAnimation = styled.div`
  animation: ${props => (props.animation ? "0.8s" : "0.3s")} ${fadeInAnimation};
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
