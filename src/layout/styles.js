import React from "react";
import styled from "styled-components";

// Top Containers

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: ${props => props.alignSelf};
  text-align: ${props => props.textAlign};
  margin: 20px;
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;
  color: ${props => (props.color ? "#221e41" : "white")};
  font-size: 8.5px;
  white-space: nowrap;
`;

export const TopTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const TopDescription = styled.div`
  margin-top: ${props => props.marginTop};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 200;
`;

// Middle Containers

export const MiddleContainer = styled.div`
  width: 75%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  font-weight: 400;
  box-sizing: border-box;
  user-select: none;
  color: ${props => (props.color ? "#221e41" : "white")};
`;

export const MiddleTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const MiddleDescription = styled.ul`
  line-height: 15px;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: ${props => (props.marginBottom ? "50px" : null)};
`;

// Link

export const Link = styled.a`
  margin-bottom: 5px;
  font-size: 11px;
  font-weight: 400;
  color: ${props => (props.color ? "#221e41" : "white")};
`;

// Bottom Containers

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-self: flex-end;
  margin: ${props => (props.margin ? "14px" : "20px")};
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  color: ${props => (props.color ? "#221e41" : "white")};
`;

export const BottomTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 9px;
  font-weight: 400;
`;

export const BottomDescription = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 9px;
  font-weight: 400;
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
