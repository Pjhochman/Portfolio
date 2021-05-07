import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from "react-animations";
import { useClickOutside } from "../Cards/hooks/useClickOutside";

const fadeInAnimation = keyframes`${fadeInDownBig}`;

const FadeIn = styled.div`
  animation: 0.3s ${fadeInAnimation};
`;

const StyledHeader = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  height: 229px;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  z-index: ${({ open }) => (open ? "3" : "2")};
  margin: auto;
  width: 100%;
  font-weight: 400;
  background: transparent;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: absolute;
  margin-left: 6vw;
  top: 2.4rem;
  white-space: nowrap;
  font-weight: 300;
  user-select: none;
  color: #221e41;
  font-size: 20px;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 450px) {
    font-size: 4.1vw;
    height: 23px;
  }
`;

const StyledMenu = styled.nav`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #040c0e;
  transform: ${({ open }) =>
    open ? "translateY(23.5%)" : "translateY(-100%)"};
  width: 100vw;
  text-align: center;
  padding: 4rem;
  position: relative;
  box-sizing: border-box;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 637px) {
    width: 100%;
  }

  a,
  button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    cursor: pointer;
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 0.8rem;
      text-align: center;
    }

    &:hover {
      color: #be9063;
    }
  }
`;

const StyledBurger = styled.button`
  position: absolute;
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

const Links = ({ open, isPage, changePageHandler }) => {
  return (
    <>
      <StyledMenu open={isPage ? !open : open}>
        <button
          onClick={changePageHandler}
          style={isPage ? null : { color: "#be9063" }}
          disabled={isPage ? false : true}
        >
          Home
        </button>
        <button
          onClick={changePageHandler}
          style={!isPage ? null : { color: "#be9063" }}
          disabled={!isPage ? false : true}
        >
          About
        </button>
        <a
          href="https://www.linkedin.com/in/peter-hochman/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a href="https://github.com/Pjhochman" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:peter.hochman.dev@gmail.com">Say Hi!</a>
      </StyledMenu>
    </>
  );
};

const Burger = ({ isPage, open, setOpen }) => {
  return (
    <>
      <StyledTitle>
        <>
          <div id="name">Peter Hochman</div>
          <div id="profession">Front End Developer</div>
        </>
      </StyledTitle>
      <StyledBurger
        open={isPage ? !open : open}
        onClick={() => setOpen(value => !value)}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
    </>
  );
};

export const DropdownMenu = ({
  isPage,
  changePageHandler,
  menu,
  isVisible
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(open ? !open : open);
  };
  const clickRef = useClickOutside(handleClick);

  return (
    <FadeIn>
      <StyledHeader ref={clickRef} open={open} isVisible={isVisible}>
        <Burger open={open} setOpen={setOpen} isPage={isPage} />
        <Links
          open={open}
          changePageHandler={changePageHandler}
          isPage={isPage}
        ></Links>
      </StyledHeader>
    </FadeIn>
  );
};
