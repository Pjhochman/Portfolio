import React, { useState } from "react";
import Burger from "./Burger";
import NavLinks from "./NavLinks";
import styled from "styled-components";
import { useClickOutside } from "../../hooks/useClickOutside";
import { fadeInAnimation } from "../../animations/animations";

const FadeIn = styled.div`
  animation: 0.3s ${fadeInAnimation};
`;

const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  height: 100px;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  z-index: ${({ open }) => (open ? "3" : "2")};
  margin: auto;
  width: 100%;
  font-weight: 400;
  background: transparent;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
`;

export const DropdownMenu = ({ isPage, changePageHandler, isVisible }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(open ? !open : open);
  };
  const clickRef = useClickOutside(handleClick);
  return (
    <FadeIn>
      <StyledHeader ref={clickRef} open={open} isVisible={isVisible}>
        <Burger
          open={open}
          setOpen={setOpen}
          changePageHandler={changePageHandler}
          isPage={isPage}
        />
        <NavLinks
          open={open}
          setOpen={setOpen}
          changePageHandler={changePageHandler}
          isPage={isPage}
        ></NavLinks>
      </StyledHeader>
    </FadeIn>
  );
};
