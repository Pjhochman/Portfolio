/* eslint-disable  */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './HomePage/Cards/styles/cards.css';

const size = 85;

const cubeValues = {
  transform: 85 / 2,
};

const StyledScene = styled.div`
  perspective: 800px;
  display: flex;
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 85px;
  width: 85px;
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: ${({ open }) => open && 'scale(2.8)'};
  margin-bottom: ${({ open, marginBottom }) => (open && marginBottom)};
  margin-top: ${({ open, marginTop }) => (open && marginTop)};

    @media (max-width: 637px) {
    margin-bottom: ${({ open }) => (open && '55vh')};
    margin-top: ${({ open, marginTop }) => (open && marginTop)};
    transform: ${({ open }) => open && 'scale(2.6)'};
    }
    .side {
    opacity: 1;
    }

    &:before {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: ${({ open, imageTitle }) => (open ? !imageTitle ? "'Application Images'" : "'Company Logo'" : null)};
    font-size: 4px;
    top: -27px;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ color }) => (color ? 'white' : '#202020')}
  }
    &:after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: ${({ open, copyright }) => (open ? !copyright ? "' \\00A9  Peter Hochman'" : null : null)};
    font-size: 4.5px;
    bottom: -27px;
    font-weight: 300;
    color: ${({ color }) => (color ? 'white' : '#202020')}
  }
`;

const StyledCube = styled.div`
  transform-style: preserve-3d;
  transition: all 0.3s ease-in-out;
  position: relative;
  width: ${size}px;
  height: ${size}px;
  animation: rotate 10s ease-in-out infinite;
  transform-origin: center center;
`;

const StyledBack = styled.img`
  transform: translateZ(-${cubeValues.transform}px) rotateX(180deg);
`;

const StyledLeft = styled.img`
  transform: translateX(-${cubeValues.transform}px) rotateY(90deg);
`;

const StyledRight = styled.img`
  transform: translateX(${cubeValues.transform}px) rotateY(90deg);
`;

const StyledTop = styled.img`
  transform: translateY(-${cubeValues.transform}px) rotateX(90deg);
`;

const StyledBottom = styled.img`
  transform: translateY(${cubeValues.transform}px) rotateX(270deg);
`;

const StyledFront = styled.img`
  transform: translateZ(${cubeValues.transform}px);
`;

const Cubes = ({
  imageTitle,
  copyright,
  color,
  absolute,
  marginBottom,
  marginTop,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  altImage1
}) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledScene
      imageTitle={imageTitle}
      copyright={copyright}
      absolute={absolute}
      marginBottom={marginBottom}
      marginTop={marginTop}
      color={color}
      open={open}
      onClick={() => setOpen((value) => !value)}
    >
      <StyledCube open={open}>
        <StyledBack type="image/webp" src={image1} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
        <StyledLeft type="image/webp" src={image2} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
        <StyledRight type="image/webp" src={image3} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
        <StyledTop type="image/webp" src={image4} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side"/>
        <StyledBottom type="image/webp" src={image5} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
        <StyledFront type="image/webp" src={image6} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
      </StyledCube>
    </StyledScene>
  );
};

Cubes.propTypes = {
  color: PropTypes.string,
  absolute: PropTypes.bool,
  margin: PropTypes.bool,
  imageTitle: PropTypes.bool,
  copyright: PropTypes.bool,
  marginBottom: PropTypes.string,
};

export default Cubes;
