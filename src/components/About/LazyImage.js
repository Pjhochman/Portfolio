import React, { useRef } from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  filter: blur(30px);
  height: 100%;
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
    <StyledImageWrapper className="about" id="profileImage">
      <StyledPlaceholder ref={refPlaceholder} src={alt} />
      <LazyLoad style={{ height: "100%", width: "100%" }}>
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

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LazyImage;
