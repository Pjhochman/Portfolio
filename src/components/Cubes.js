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
  transform: ${({ open }) => open && 'scale(2.8)'};
  margin-bottom: ${({ open, marginBottom }) => (open && marginBottom)};
  margin-top: ${({ open, marginTop }) => (open && marginTop)};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
    font-size: 3.7px;
    -webkit-font-smoothing: antialiased;
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

const StyledBack = styled.div`
  transform: translateZ(-${cubeValues.transform}px) rotateX(180deg);
  background-image: url(${({ image1 }) => image1});
  object-fit: contain;
`;

const StyledLeft = styled.div`
  transform: translateX(-${cubeValues.transform}px) rotateY(90deg);
  background-image: url(${({ image2 }) => image2});
  object-fit: contain;
`;

const StyledRight = styled.div`
  transform: translateX(${cubeValues.transform}px) rotateY(90deg);
  background-image: url(${({ image3 }) => image3});
  object-fit: contain;
`;

const StyledTop = styled.div`
  transform: translateY(-${cubeValues.transform}px) rotateX(90deg);
  background-image: url(${({ image4 }) => image4});
  object-fit: contain;
`;

const StyledBottom = styled.div`
  transform: translateY(${cubeValues.transform}px) rotateX(270deg);
  background-image: url(${({ image5 }) => image5});
  object-fit: fill;
`;

const StyledFront = styled.div`
  transform: translateZ(${cubeValues.transform}px);
  background-image: url(${({ image6 }) => image6});
  object-fit: contain;
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
        <StyledBack image1={image1} className="side" />
        <StyledLeft image2={image2} className="side" />
        <StyledRight image3={image3} className="side" />
        <StyledTop image4={image4} className="side" />
        <StyledBottom image5={image5} className="side" />
        <StyledFront image6={image6} className="side" />
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
