import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const OpenModalButton = styled(motion.button)`
  display: block;
  width: 150px;
  line-height: 40px;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: $text-color-black;
  cursor: pointer;
  outline: none;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const animatedOpenButton = ({ children, handleClick }) => {
  return (
    <OpenModalButton
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </OpenModalButton>
  );
};

export default animatedOpenButton;
