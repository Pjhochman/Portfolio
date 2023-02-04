import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { internalLinks, externalLinks } from './data.json';

const StyledContainer = styled.nav`
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: transparent;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  text-align: center;
  margin: 1.5rem;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  right: 10vw;
  transition: transform 0.3s ease-in-out;
    @media (max-width: 1280px) {
    background: #202020;
    width: 100%;
    right: 0;
  }
  @media (max-width: 885px) {
    background: #202020;
    flex-direction: column;
    margin: 1.2rem;
    width: 100%;
  }
`;

const StyledSocialMedia = styled.a`
  cursor: pointer;
  user-select: none;
  font-size: 0.85rem;
  text-transform: uppercase;
  margin: 1.2rem 1.5rem 1.5rem 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #121212;
  padding-bottom: 10px;
  border-bottom: 0px solid #202020;

  @media (max-width: 1280px) {
    color: white;
    text-shadow: unset !important;
  }

  @media (max-width: 885px) {
    margin: 1.6rem 0;
    font-size: 0.7rem;
    text-align: center;
  }

  &:hover {
    border-width: 3px;
    text-shadow: 1px 3px 2px rgb(0 0 0 / 30%), 0px -4px 10px rgb(255 255 255 / 30%);
  }

  &.active {
    border-width: 3px;
    text-shadow: 1px 3px 2px rgb(0 0 0 / 30%), 0px -4px 10px rgb(255 255 255 / 30%);
  }

  &:nth-child(3) {
    width: 7.5rem;
  }

  &:nth-child(4) {
    width: 5.8rem;
  }
`;

const StyledLink = styled(NavLink)`
  cursor: pointer;
  user-select: none;
  font-size: 0.85rem;
  text-transform: uppercase;
  margin: 1.2rem 1.5rem 1.5rem 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #121212;
  padding-bottom: 10px;
  border-bottom: 0px solid #202020;


  @media (max-width: 1280px) {
    color: white;
    text-shadow: unset !important;
  }

  @media (max-width: 885px) {
    margin: 1.6rem 0;
    font-size: 0.7rem;
    text-align: center;
  }

  &:hover {
    border-width: 3px;
    text-shadow: 1px 3px 2px rgb(0 0 0 / 30%), 0px -4px 10px rgb(255 255 255 / 30%);
  }

  &.active {
    border-width: 3px;
    text-shadow: 1px 3px 2px rgb(0 0 0 / 30%), 0px -4px 10px rgb(255 255 255 / 30%);
  }

  &:nth-child(1) {
    width: 4.05rem;
  }

  &:nth-child(2) {
    width: 4.95rem;
  }
`;

const Links = ({ open }) => (
  <StyledContainer open={open}>
    {Object.values(internalLinks).map((value) => (
      <StyledLink
        activeclassname="selected"
        key={value.title}
        end
        to={value.path}
      >
        {value.title}
      </StyledLink>
    ))}
    {Object.values(externalLinks).map((value) => (
      <StyledSocialMedia
        target="_blank"
        aria-label={value.title}
        key={value.title}
        href={value.href}
        rel="noreferrer"
      >
        {value.title}
      </StyledSocialMedia>
    ))}
  </StyledContainer>
);

Links.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Links;
