import React from "react";
import styled from "styled-components";

// Top Containers

export const StyledTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;
  font-size: 9px;
  white-space: nowrap;
  margin: ${props => (props.margin ? props.margin : "20px")};
  color: ${props => (props.color ? "#221e41" : "#e9f0fb")};
  align-self: ${props => props.alignSelf};
  text-align: ${props => props.textAlign};
`;

export const StyledTopTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const StyledTopDescription = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 200;
  margin-top: ${props => props.marginTop};
  line-height: ${props => props.lineHeight};
`;

// Middle Containers

export const StyledMiddleContainer = styled.div`
  width: 75%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  font-weight: 400;
  box-sizing: border-box;
  user-select: none;
  white-space: ${props => props.whiteSpace && "nowrap"};
  color: ${props => (props.color ? "#221e41" : "#e9f0fb")};
`;

export const StyledMiddleTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const StyledMiddleDescription = styled.ul`
  line-height: 15px;
  font-size: 11px;
  font-weight: 400;
  width: ${props => props.width};
  margin-bottom: ${props => props.marginBottom && "50px"};
  @media (max-width: 637px) {
    width: 250px;
  }
`;

// Bottom Containers

export const StyledBottomContainer = styled.div`
  display: flex;
  align-self: flex-end;
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  flex-direction: ${props => props.flexDirection};
  margin: ${props => (props.margin ? "14px" : "20px")};
  color: ${props => (props.color ? "#221e41" : "#e9f0fb")};
`;

export const StyledBottomTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 9px;
  font-weight: 400;
`;

export const StyledBottomDescription = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 9px;
  font-weight: 400;
`;

// Link

export const StyledLink = styled.a`
  margin-bottom: 5px;
  font-size: 11px;
  font-weight: 400;
  color: ${props => (props.color ? "#221e41" : "#e9f0fb")};
`;

export const CardItemContext = React.createContext({
  TopContent: null,
  MiddleContent: null,
  BottomContent: null,
  TopTitle: null,
  TopDescription: null,
  MiddleTitle: null,
  MiddleDescription: null,
  BottomTitle: null,
  BottomDescription: null,
  Link: null
});
