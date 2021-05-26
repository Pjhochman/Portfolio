import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 380px;
`;

const StyledImage = styled.img`
  width: 100%;
  box-shadow: 0 32px 40px -20px rgba(0, 0, 0, 0.80);
  transition: filter 0.5s;
`;

const LazyImage = ({ src, alt }) => (
  <StyledImageWrapper className="about" id="profileImage">
    <StyledImage
      src={src}
      alt={alt}
    />
  </StyledImageWrapper>
);

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
