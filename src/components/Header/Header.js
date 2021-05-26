import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import { fadeInAnimation } from '../../animations/animations';
import './styles/header.css';

const FadeIn = styled.div`
  animation: 0.3s ${fadeInAnimation};
`;

const StyledLink = styled(NavLink)`
cursor: default;
`;

const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  height: 100px;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  z-index: ${({ open }) => (open ? '3' : '2')};
  margin: auto;
  width: 100%;
  font-weight: 400;
  background: transparent;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
`;

const StyledTitleWrapper = styled.h1`
  display: flex;
  position: relative;
  margin-left: 6vw;
  white-space: nowrap;
  font-weight: 300;
  user-select: none;
  color: #221e41;
  font-size: 1.2em;
  outline: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 450px) {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 26px;
  line-height: 27px;
  font-size: 4.1vw;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const clickHandler = () => {
    setOpen((value) => !value);
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible((value) => !value);
    }, 0);
  }, []);
  return (
    <FadeIn>
      <StyledHeader open={open} isVisible={isVisible}>
        <StyledLink to="/">
          <StyledTitleWrapper>
            Peter Hochman&nbsp;
            <span id="profession">Front End Developer</span>
          </StyledTitleWrapper>
        </StyledLink>
        <Dropdown
          open={open}
          setOpen={setOpen}
          isVisible={isVisible}
          clickHandler={clickHandler}
        />
      </StyledHeader>
    </FadeIn>
  );
};

export default Header;
