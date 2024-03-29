import { createContext } from 'react';
import styled from 'styled-components';

// Top Containers

export const StyledTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;
  font-size: 10px;
  white-space: nowrap;
  margin: ${(props) => (props.margin ? props.margin : '20px')};
  color: ${(props) => (props.color ? '#202020' : '#ffffff')};
  align-self: ${(props) => props.alignSelf};
  text-align: ${(props) => props.textAlign};
  @media (max-width: 637px) {
    font-size: 13px;
  }
`;

export const StyledTopTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  @media (max-width: 637px) {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  }
`;

export const StyledTopDescription = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  margin-top: ${(props) => props.marginTop};
  line-height: ${(props) => props.lineHeight};
  @media (max-width: 637px) {
  text-transform: none;
  font-weight: 200;
  }
`;

// Middle Containers

export const StyledMiddleContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  box-sizing: border-box;
  user-select: none;
  margin-top: ${(props) => props.margin && props.margin};
  white-space: ${(props) => props.whiteSpace && 'nowrap'};
  color: ${(props) => (props.color ? '#202020' : '#e9f0fb')};
`;

export const StyledMiddleTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 637px) {
    font-size: 12px;
  }
`;

export const StyledMiddleDescription = styled.ul`
  white-space: break-spaces;
  line-height: 15px;
  font-size: 12px;
  font-weight: bold;
  width: ${(props) => props.width};
  margin-bottom: ${(props) => props.marginBottom && '50px'};
  width: 270px;
  @media (max-width: 637px) {
  width: 270px;
  font-size: 12px;
  line-height: 18px;
  }
`;

// Bottom Containers

export const StyledBottomContainer = styled.div`
  display: flex;
  align-self: center;
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  flex-direction: ${(props) => props.flexDirection};
  margin: 20px;
  color: ${(props) => (props.color ? '#202020' : '#e9f0fb')};
`;

export const StyledBottomTitle = styled.div`
  text-transform: ${(props) => (props.textTransform ? null : 'uppercase')};
  letter-spacing: 2px;
  font-size: 9px;
  font-weight: bold;
    @media (max-width: 637px) {
  font-size: 10px;
  }
`;

export const StyledBottomDescription = styled.div`
  text-transform: ${(props) => (props.textTransform ? null : 'uppercase')};
  letter-spacing: 2px;
  font-size: 9px;
  font-weight: bold;
    @media (max-width: 637px) {
  font-size: 10px;
  }
`;

// Link

export const StyledButton = styled.button`
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.color ? '#e9f0fb' : '#202020')};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

export const CardItemContext = createContext({
  TopContent: null,
  MiddleContent: null,
  BottomContent: null,
  TopTitle: null,
  TopDescription: null,
  MiddleTitle: null,
  MiddleDescription: null,
  BottomTitle: null,
  BottomDescription: null,
  Button: null,
});
