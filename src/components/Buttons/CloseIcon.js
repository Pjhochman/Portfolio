import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCloseIcon = styled.svg`
  width: 15px;
  height: auto;
  position: relative;
  cursor: pointer;
`;

const CloseIcon = ({ color }) => (
  <StyledCloseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.39 20.39">
    <line
      x1="19.39"
      y1="19.39"
      x2="1"
      y2="1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <line
      x1="1"
      y1="19.39"
      x2="19.39"
      y2="1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </StyledCloseIcon>
);

CloseIcon.propTypes = {
  color: PropTypes.string,
};

CloseIcon.defaultProps = {
  color: PropTypes.string,
};

export default CloseIcon;
