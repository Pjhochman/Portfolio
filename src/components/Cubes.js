/* eslint-disable  */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './HomePage/Cards/styles/cards.css';

const size = 88;

const cubeValues = {
  transform: 88 / 2,
};

const StyledScene = styled.div`
  perspective: 600px;
  display: flex;
  opacity:  ${({ isVisible }) => (isVisible ? '1' : '0')};
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: ${size}px;
  width: ${size}px;
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: ${({ open }) => open && 'scale(2.7)'};
  margin-bottom: ${({ open, marginBottom }) => (open && marginBottom)};
  margin-top: ${({ open, marginTop }) => (open && marginTop)};

    @media (max-width: 637px) {
    margin-bottom: ${({ open }) => (open && '55vh')};
    margin-top: ${({ open, marginTop }) => (open && marginTop)};
    transform: ${({ open }) => open && 'scale(2.5)'};
    }
    .side {
    opacity: 1;
    }

    &:before {
    margin-left: -1px;
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: ${({ open, imageTitle }) => (open && imageTitle)};
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
  animation: rotate 12s ease-in-out infinite;
  transform-origin: center center;
`;

const StyledBack = styled.img`
  border: 3px solid ${({borderColor}) => borderColor};
  padding: 7px;  
  transform: translateZ(-${cubeValues.transform}px) rotateX(180deg);
  background-color: ${({backgroundColor}) => backgroundColor}
`;

const StyledLeft = styled.img`
  border: 3px solid ${({borderColor}) => borderColor};
  padding: 7px; 
  transform: translateX(-${cubeValues.transform}px) rotateY(90deg);
  background-color: ${({backgroundColor}) => backgroundColor}
`;

const StyledRight = styled.img`
  border: 3px solid ${({borderColor}) => borderColor};
  padding: 7px; 
  transform: translateX(${cubeValues.transform}px) rotateY(90deg);
  background-color: ${({backgroundColor}) => backgroundColor}
`;

const StyledTop = styled.img`
  border: 3px solid ${({borderColor}) => borderColor};
  padding: 7px;
  transform: translateY(-${cubeValues.transform}px) rotateX(90deg);
  background-color: ${({backgroundColor}) => backgroundColor}
`;

const StyledBottom = styled.img`
  border: 3px solid ${({borderColor}) => borderColor};
  padding: 7px; 
  transform: translateY(${cubeValues.transform}px) rotateX(270deg);
  background-color: ${({backgroundColor}) => backgroundColor}
`;

const StyledFront = styled.img`
  border: 3px solid ${({borderColor}) => borderColor};
  padding: 7px; 
  transform: translateZ(${cubeValues.transform}px);
  background-color: ${({backgroundColor}) => backgroundColor}
`;

const Cubes = ({
  isVisible,
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
  altImage1,
  backgroundColor,
  borderColor
}) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledScene
      isVisible={isVisible}
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
        <StyledBack borderColor={borderColor} backgroundColor={backgroundColor} type="image/webp" src={image1} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
        <StyledLeft borderColor={borderColor} backgroundColor={backgroundColor} type="image/webp" src={image2} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
        <StyledRight borderColor={borderColor} backgroundColor={backgroundColor} type="image/webp" src={image3} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
        <StyledTop borderColor={borderColor} backgroundColor={backgroundColor} type="image/webp" src={image4} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side"/>
        <StyledBottom borderColor={borderColor} backgroundColor={backgroundColor} type="image/webp" src={image5} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
        <StyledFront borderColor={borderColor} backgroundColor={backgroundColor} type="image/webp" src={image6} onError={(e) => (e.target.onerror = null, e.target.src = altImage1)} className="side" />
      </StyledCube>
    </StyledScene>
  );
};

Cubes.propTypes = {
  color: PropTypes.string,
  absolute: PropTypes.bool,
  margin: PropTypes.bool,
  imageTitle: PropTypes.string,
  copyright: PropTypes.bool,
  marginBottom: PropTypes.string,
};

export default Cubes;
