import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../Cards/hooks/useWindowSize";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 0.5s ${fadeInAnimation};
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 4%;
  white-space: nowrap;
  font-weight: 300;
  user-select: none;
  color: white;
  font-size: 17px;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 400px) {
    font-size: 4.3vw;
  }
`;

const StyledMenu = styled.nav`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #040c0e;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-87%)")};
  width: 100vw;
  text-align: center;
  padding: 2rem;
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
    font-size: 0.8rem;
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
  top: 24%;
  right: 1rem;
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
    width: 1.54rem;
    height: 0.1rem;
    background: ${({ open }) => (open ? "#EFFFFA" : "#EFFFFA")};
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

const Links = ({ setOpen, open, isPage, changePageHandler, menu }) => {
  const [isVisible, setVisible] = useState(open);
  const { width } = useWindowSize();
  const mediaDesktopWidth = 1110;
  useEffect(() => {
    setTimeout(
      () => {
        setVisible(open);
      },
      open ? 0 : 200
    );
  }, [open]);
  return (
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
      {!isVisible && (
        <StyledTitle>
          {width > mediaDesktopWidth ? (
            <>
              <div id="name">Peter Hochman</div>
              <div id="profession">Front End Developer</div>
            </>
          ) : (
            <>
              {!menu && (
                <>
                  <div id="name">Peter Hochman</div>
                  <div id="profession">Front End Developer</div>
                </>
              )}
            </>
          )}
        </StyledTitle>
      )}
    </StyledMenu>
  );
};

const Burger = ({ isPage, open, setOpen }) => {
  return (
    <StyledBurger
      open={isPage ? !open : open}
      onClick={() => setOpen(value => !value)}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export const DropdownMenu = ({
  isPage,
  changePageHandler,
  menu,
  isVisible
}) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <>
      {isVisible && (
        <FadeIn>
          <header ref={node}>
            <Burger open={open} setOpen={setOpen} isPage={isPage} />
            <Links
              open={open}
              changePageHandler={changePageHandler}
              isPage={isPage}
              menu={menu}
              setOpen={setOpen}
            ></Links>
          </header>
        </FadeIn>
      )}
    </>
  );
};
