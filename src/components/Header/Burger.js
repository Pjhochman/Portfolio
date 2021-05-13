import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  position: relative;
  margin-left: 6vw;
  white-space: nowrap;
  font-weight: 300;
  user-select: none;
  color: #221e41;
  font-size: 20px;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 450px) {
    height: 23px;
    font-size: 4.35vw;
  }
`;

const StyledBurger = styled.button`
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  top: 2.4rem;
  right: 8vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.56rem;
    height: 0.14rem;
    background: ${({ open }) => (open ? "#EFFFFA" : "#221e41")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ isPage, changePageHandler, open, setOpen }) => {
  return (
    <>
      <StyledTitle onClick={isPage ? changePageHandler : null}>
        Peter Hochman&nbsp;<span id="profession">Front End Developer</span>
      </StyledTitle>
      <StyledBurger open={open} onClick={() => setOpen(value => !value)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
    </>
  );
};

export default Burger;
