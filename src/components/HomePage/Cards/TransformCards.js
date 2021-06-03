import styled from 'styled-components';

const StyledCards = styled.div`
    .colorPalette {
    border-radius: ${({ colorPaletteRadius }) => `${colorPaletteRadius}`};
    width: ${({ colorPaletteWidth }) => colorPaletteWidth} !important;
    height: ${({ colorPaletteHeight }) => colorPaletteHeight} !important;
    transform: ${({ colorPaletteTransform }) => colorPaletteTransform} !important;
    top: ${({ colorPaletteTop }) => colorPaletteTop} !important;
    left: ${({ colorPaletteLeft }) => colorPaletteLeft} !important;
    transition: all 0.3s ease-in-out;
  }
    .accedo {
    border-radius: ${({ accedoRadius }) => `${accedoRadius}`};
    width: ${({ accedoWidth }) => accedoWidth} !important;
    height: ${({ accedoHeight }) => accedoHeight} !important;
    transform: ${({ accedoTransform }) => accedoTransform} !important;
    top: ${({ accedoTop }) => accedoTop} !important;
    left: ${({ accedoLeft }) => accedoLeft} !important;
    transition: all 0.3s ease-in-out;
  }
    .project {
    border-radius: ${({ projectRadius }) => `${projectRadius}`};
    width: ${({ projectWidth }) => projectWidth} !important;
    height: ${({ projectHeight }) => projectHeight} !important;
    transform: ${({ projectTransform }) => projectTransform} !important;
    top: ${({ projectTop }) => projectTop} !important;
    left: ${({ projectLeft }) => projectLeft} !important;
    transition: all 0.3s ease-in-out;
  }
   .bandPlanner {
    border-radius: ${({ bandPlannerRadius }) => `${bandPlannerRadius}`};
    width: ${({ bandPlannerWidth }) => bandPlannerWidth} !important;
    height: ${({ bandPlannerHeight }) => bandPlannerHeight} !important;
    transform: ${({ bandPlannerTransform }) => bandPlannerTransform} !important;
    top: ${({ bandPlannerTop }) => bandPlannerTop} !important;
    left: ${({ bandPlannerLeft }) => bandPlannerLeft} !important;
    transition: all 0.3 ease-in-out;
  }
   .hyperIsland {
    border-radius: ${({ hyperRadius }) => `${hyperRadius}`};
    width: ${({ hyperWidth }) => hyperWidth} !important;
    height: ${({ hyperHeight }) => hyperHeight} !important;
    transform: ${({ hyperTransform }) => hyperTransform} !important;
    top: ${({ hyperTop }) => hyperTop} !important;
    left: ${({ hyperLeft }) => hyperLeft} !important;
    transition: all 0.3s ease-in-out;
  }
`;

export default StyledCards;
