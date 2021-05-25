import styled from 'styled-components';

const StyledGradient = styled.div`
  width: 100%;
  top: 0;
  z-index: -10;
   touch-action: manipulation;
    background: linear-gradient(
      -45deg,
      #b6aca5,
      #677174,
      #e9f0fb,
      #757c78,
      #f5efe8
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  } 
`;

export default StyledGradient;
