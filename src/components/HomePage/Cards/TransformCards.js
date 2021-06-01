import styled from 'styled-components';

const StyledCards = styled.div`
    .transform1 {
     border-radius: ${({
    randomBorderBottom, randomBorderTop, randomBorderLeft, randomBorderRight,
  }) => `${randomBorderTop}% ${randomBorderRight}% ${randomBorderBottom}% ${randomBorderLeft}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
    transform: ${({ randomTop, randomLeft }) => `translate(${`${randomTop}%`},${`  ${randomLeft}%`}) !important`};
    transition: all 0.3s ease-in-out;
  }
   .transform2 {
    border-radius: ${({
    randomBorderBottom, randomBorderTop, randomBorderLeft, randomBorderRight,
  }) => `${randomBorderTop}% ${randomBorderRight}% ${randomBorderBottom}% ${randomBorderLeft}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
      transform: ${({ randomTop, randomLeft }) => `translate(${`${randomTop}%`},${`  ${randomLeft}%`}) !important`};

    transition: all 0.3s ease-in-out;
  }
    .transform3 {
     border-radius: ${({
    randomBorderBottom, randomBorderTop, randomBorderLeft, randomBorderRight,
  }) => `${randomBorderTop}% ${randomBorderRight}% ${randomBorderBottom}% ${randomBorderLeft}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
    transform: ${({ randomTop, randomLeft }) => `translate(${`${randomTop}%`},${`  ${randomLeft}%`}) !important`};

    transition: all 0.3s ease-in-out;
  }
    .transform4 {
     border-radius: ${({
    randomBorderBottom, randomBorderTop, randomBorderLeft, randomBorderRight,
  }) => `${randomBorderTop}% ${randomBorderRight}% ${randomBorderBottom}% ${randomBorderLeft}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
     transform: ${({ randomTop, randomLeft }) => `translate(${`${randomTop}%`},${`  ${randomLeft}%`}) !important`};

    transition: all 0.3 ease-in-out;
  }
     .transform5 {
     border-radius: ${({
    randomBorderBottom, randomBorderTop, randomBorderLeft, randomBorderRight,
  }) => `${randomBorderTop}% ${randomBorderRight}% ${randomBorderBottom}% ${randomBorderLeft}%`};
    width: ${({ randomWidth }) => randomWidth}px !important;
    height: ${({ randomHeight }) => randomHeight}px !important;
    transform: ${({ randomTop, randomLeft }) => `translate(${`${randomTop}%`},${`  ${randomLeft}%`}) !important`};

    transition: all 0.3s ease-in-out;
  }
`;

export default StyledCards;
