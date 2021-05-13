import React, { useRef } from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-color: #e9f0fb;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const ImageWrapper = styled.div`
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

const Placeholder = styled.img`
  filter: blur(30px);
  position: absolute;
  height: 380px;
  width: 380px;
  animation: ${loadingAnimation} 3s infinite;
`;

const StyledImage = styled.img`
  height: 100%;
  transition: filter 0.5s;
`;

const LazyImage = ({ src, alt }) => {
  const refPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} src={alt} />
      <LazyLoad style={{ height: "100%", width: "100%" }}>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LazyImage;
