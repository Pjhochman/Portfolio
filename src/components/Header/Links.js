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
  padding: 1.5rem;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  right: 10vw;
  transition: transform 0.3s ease-in-out;
    @media (max-width: 1100px) {
    background: #040c0e;
    width: 100%;
    right: 0;
  }
  @media (max-width: 637px) {
    background: #040c0e;
    flex-direction: column;
    padding: 1.6rem;
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
  @media (max-width: 637px) {
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
  @media (max-width: 637px) {
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
