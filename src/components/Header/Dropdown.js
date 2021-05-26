import React from 'react';
import PropTypes from 'prop-types';
import Burger from './Burger';
import Links from './Links';

const Dropdown = ({ open, setOpen, clickHandler }) => (
  <>
    <Links open={open} />
    <Burger open={open} setOpen={setOpen} clickHandler={clickHandler} />
  </>
);

Dropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Dropdown;
