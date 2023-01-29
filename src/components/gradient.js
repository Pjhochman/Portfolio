import styled from 'styled-components';

const StyledGradient = styled.div`
  width: 100%;
  top: 0;
  z-index: -10;
   touch-action: manipulation;
    background: linear-gradient(
      -45deg,
      #ebf6f7,
      #eaf4fc,
      #e5e4e2,
      #F8F8FF,
      #f5f5f5
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
