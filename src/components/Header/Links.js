import React from "react";
import styled from "styled-components";
import { pageData } from "./data";

const pathName = window.location.pathname;

const StyledContainer = styled.nav`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #040c0e;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  width: 100vw;
  text-align: center;
  padding: 4rem;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 637px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  cursor: pointer;
  user-select: none;
  font-size: 0.7rem;
  text-transform: uppercase;
  padding: 1.5rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;
  color: ${({ path }) => (pathName === path ? "#be9063" : "#e9f0fb")};
  @media (max-width: 576px) {
    font-size: 0.8rem;
    text-align: center;
  }
  &:hover {
    color: #be9063;
  }
`;

const Links = ({ open }) => {
  return (
    <StyledContainer open={open}>
      {Object.values(pageData).map((value, index) => {
        return (
          <StyledLink
            aria-label={value.title}
            key={value.title}
            href={value.href}
            path={value.path}
          >
            {value.title}
          </StyledLink>
        );
      })}
    </StyledContainer>
  );
};

export default Links;
