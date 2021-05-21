import React, { useRef } from 'react';
import LazyLoad from 'react-lazyload';
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

const StyledPlaceholder = styled.img`
  position: absolute;
  width: 380px;
  height: 380px;
  filter: blur(30px);
  transition: filter 0.5s;
  @media (max-width: 1100px) {
    width: 34vw;
    height: 34vw;
  }
  @media (max-width: 637px) {
    width: 60vw;
    height: 60vw;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  box-shadow: 0 32px 40px -20px rgba(0, 0, 0, 0.25);
  transition: filter 0.5s;
`;

const LazyImage = ({ src, alt }) => {
  const refPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <StyledImageWrapper className="about" id="profileImage">
      <StyledPlaceholder ref={refPlaceholder} src={alt} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </StyledImageWrapper>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
