import React from "react";
import styled from "styled-components";
import { useClickOutside } from "../../hooks/useClickOutside";

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

const Burger = props => {
  const { open, clickHandler } = props;
  const triggerHandler = () => {
    props.setOpen(open && !open);
  };

  const clickRef = useClickOutside(triggerHandler);
  return (
    <StyledBurger ref={clickRef} open={open} onClick={clickHandler}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default Burger;
