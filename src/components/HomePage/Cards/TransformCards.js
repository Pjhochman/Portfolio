import styled from 'styled-components';

const StyledCards = styled.div`
   .transform1 {
    transform: ${({ randomTransform }) => `translate(${`${randomTransform}%`},${`  ${randomTransform}%`}) !important`};
    border-radius: ${({ randomRadius }) => `${randomRadius}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
    transition: all 0.3s ease-in-out;
  }
   .transform2 {
    transform: ${({ randomTransform }) => `translate(${`${randomTransform}%`},${`  ${randomTransform}%`}) !important`};
    border-radius: ${({ randomRadius }) => `${randomRadius}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
    transition: all 0.3s ease-in-out;
  }
   .transform3 {
    transform: ${({ randomTransform }) => `translate(${`${randomTransform}%`},${`  ${randomTransform}%`}) !important`};
    border-radius: ${({ randomRadius }) => `${randomRadius}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
    transition: all 0.3s ease-in-out;
  }
   .transform4 {
    transform: ${({ randomTransform }) => `translate(${`${randomTransform}%`},${`  ${randomTransform}%`}) !important`};
    border-radius: ${({ randomRadius }) => `${randomRadius}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
    transition: all 0.3 ease-in-out;
  }
    .transform5 {
     transform: ${({ randomTransform }) => `translate(${`${randomTransform}%`},${`  ${randomTransform}%`}) !important`};
     border-radius: ${({ randomRadius }) => `${randomRadius}%`};
     width: ${({ randomWidth }) => randomWidth}px !important;
     height: ${({ randomHeight }) => randomHeight}px !important;
    transition: all 0.3s ease-in-out;
  }
`;

export default StyledCards;
