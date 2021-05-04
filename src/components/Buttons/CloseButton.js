import React from "react";
import styled from "styled-components";

const CloseIcon = styled.svg`
  width: 15px;
  height: auto;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

export const CloseButton = ({ color }) => {
  return (
    <CloseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.39 20.39">
      <line
        x1="19.39"
        y1="19.39"
        x2="1"
        y2="1"
        fill="none"
        stroke={color ? "#221e41" : "white"}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="1"
        y1="19.39"
        x2="19.39"
        y2="1"
        fill="none"
        stroke={color ? "#221e41" : "white"}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </CloseIcon>
  );
};
