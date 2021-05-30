import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';

const BurgerWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${({ open }) => (open ? 'fixed' : 'absolute')};
  top: 25px;
  right: 6.5vw;
  width: 60px;
  height: 60px;
  @media (max-width: 637px) {
  top: 22px;
  right: 10px;
  }
`;

const StyledBurger = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  height: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:focus {
    outline: none;
  }
  @media (max-width: 637px) {
    width: 1.5rem;
  height: 1.5rem;
  }
  div {
    width: 1.8rem;
    height: 3px;
    background: ${({ open }) => (open ? '#EFFFFA' : '#202020')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.8px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(-20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
    @media (max-width: 637px) {
    width: 1.5rem;
    height: 0.1rem;
    transform-origin: 0.4px;
  }
  }
`;

const Burger = ({ open, setOpen, clickHandler }) => {
  const triggerHandler = () => {
    setOpen(open && !open);
  };
  const clickRef = useClickOutside(triggerHandler);
  return (
    <BurgerWrapper onClick={clickHandler} ref={clickRef}>
      <StyledBurger
        aria-label="dropdown"
        open={open}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </BurgerWrapper>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Burger;
