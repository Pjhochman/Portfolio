import React, { useEffect, useState } from "react";
import "./header.css";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInDownAnimation = keyframes`${fadeIn}`;

const FadeInDown = styled.div`
  animation: 0.8s ${fadeInDownAnimation};
`;

const Header = ({ pageHandler, isPage }) => {
  const [isVisible, setVisible] = useState(false);
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState();

  const menuHandler = () => {
    setMenu(value => !value);
  };

  const changePageHandler = () => {
    pageHandler();
    setMenu(value => !value);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setTimeout(() => {
      setVisible(value => !value);
    }, 1800);
  }, []);
  return (
    <FadeInDown style={isVisible ? { display: "flex" } : { display: "none" }}>
      <header
        style={
          menu && width < "1101"
            ? {
                height: "50%",
                flexDirection: "column",
                backgroundColor: "#61677c"
              }
            : { height: "50px" }
        }
      >
        <div className="information-container">
          {width > "1100" ? (
            <>
              <h1 id="name">Peter Hochman</h1>
              <h1 id="profession">Front End Developer</h1>
            </>
          ) : (
            <>
              {!menu && (
                <>
                  <h1 id="name">Peter Hochman</h1>
                  <h1 id="profession">Front End Developer</h1>
                </>
              )}
            </>
          )}
        </div>
        <img
          onClick={menuHandler}
          style={
            menu
              ? { transform: "rotate(-90deg)" }
              : { transform: "rotate(0deg)" }
          }
          alt="img"
          id="menuIcon"
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC01MyAzODQgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTM2OCAxNTQuNjY3OTY5aC0zNTJjLTguODMyMDMxIDAtMTYtNy4xNjc5NjktMTYtMTZzNy4xNjc5NjktMTYgMTYtMTZoMzUyYzguODMyMDMxIDAgMTYgNy4xNjc5NjkgMTYgMTZzLTcuMTY3OTY5IDE2LTE2IDE2em0wIDAiLz48cGF0aCBkPSJtMzY4IDMyaC0zNTJjLTguODMyMDMxIDAtMTYtNy4xNjc5NjktMTYtMTZzNy4xNjc5NjktMTYgMTYtMTZoMzUyYzguODMyMDMxIDAgMTYgNy4xNjc5NjkgMTYgMTZzLTcuMTY3OTY5IDE2LTE2IDE2em0wIDAiLz48cGF0aCBkPSJtMzY4IDI3Ny4zMzIwMzFoLTM1MmMtOC44MzIwMzEgMC0xNi03LjE2Nzk2OS0xNi0xNnM3LjE2Nzk2OS0xNiAxNi0xNmgzNTJjOC44MzIwMzEgMCAxNiA3LjE2Nzk2OSAxNiAxNnMtNy4xNjc5NjkgMTYtMTYgMTZ6bTAgMCIvPjwvc3ZnPg=="
        />
        {menu || width > "1100" ? (
          <div className="contact-container">
            <button
              id="home"
              className="links"
              onClick={changePageHandler}
              style={isPage ? { fontWeight: "300" } : { fontWeight: "500" }}
              disabled={isPage ? false : true}
            >
              Home
            </button>
            <button
              id="about"
              className="links"
              onClick={changePageHandler}
              style={!isPage ? { fontWeight: "300" } : { fontWeight: "500" }}
              disabled={!isPage ? false : true}
            >
              About
            </button>
            <a
              className="links"
              href="https://www.linkedin.com/in/peter-hochman/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              className="links"
              href="https://github.com/Pjhochman"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="links" href="mailto:peter.hochman.dev@gmail.com">
              Say Hi!
            </a>
          </div>
        ) : null}
      </header>
    </FadeInDown>
  );
};

export default Header;
