import styled from 'styled-components';

const StyledGradient = styled.div`
  width: ${({ width }) => width};
  position: absolute;
  height: 100vh;
  top: 0;
  z-index: -10;
  transition: all 1s ease-in-out;
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
