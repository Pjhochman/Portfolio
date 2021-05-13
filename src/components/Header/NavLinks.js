import React from "react";
import styled from "styled-components";

const StyledLinks = styled.nav`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #040c0e;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  width: 100vw;
  text-align: center;
  padding: 3rem 4rem;
  position: fixed;
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

const NavLinks = ({ open, setOpen, isPage, changePageHandler }) => {
  const changePage = () => {
    changePageHandler();
    setOpen(!open);
  };
  return (
    <>
      <StyledLinks open={open}>
        <button
          onClick={changePage}
          style={isPage ? null : { color: "#be9063" }}
          disabled={isPage ? false : true}
        >
          Home
        </button>
        <button
          onClick={changePage}
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
      </StyledLinks>
    </>
  );
};

export default NavLinks;
