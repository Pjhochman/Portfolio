import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { internalLinks, externalLinks } from './data.json';

const StyledContainer = styled.nav`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #040c0e;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
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

const StyledSocialMedia = styled.a`
  cursor: pointer;
  user-select: none;
  font-size: 0.7rem;
  text-transform: uppercase;
  padding: 1.5rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #e9f0fb;
  @media (max-width: 576px) {
    font-size: 0.8rem;
    text-align: center;
  }
  &:hover {
    color: #be9063;
  }
`;

const StyledLink = styled(NavLink)`
  cursor: pointer;
  user-select: none;
  font-size: 0.7rem;
  text-transform: uppercase;
  padding: 1.5rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #e9f0fb;
  @media (max-width: 576px) {
    font-size: 0.8rem;
    text-align: center;
  }
  &:hover {
    color: #be9063;
  }
  &.selected {
  color: #be9063;  
  }
`;

const Links = ({ open }) => (
  <StyledContainer open={open}>
    {Object.values(internalLinks).map((value) => (
      <StyledLink
        activeClassName="selected"
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
