import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import useWindowSize from '../../../hooks/useWindowSize';
import OpenModalButton from '../Modal/OpenModalButton';
import resumeImage from '../../../assets/images/resumeImage.webp';
import './styles/resume.css';

const StyledContainer = styled.div`
  cursor: default;
  padding-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  height: 100px;
`;

const StyledResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 190px;
  margin: auto;
  height: auto;
`;

const StyledImage = styled.img`
  height: 100%;
  box-shadow: 32px 40px -20px rgba(0, 0, 0, 0.25);
`;

const StyledModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #221e41;
  }
`;

const Resume = (props) => {
  const { children } = props;
  const [isOpen, setOpen] = useState(false);
  const mediaWidthMobile = 637;

  function handleOpenModal(open) {
    setOpen(open);
  }

  const { width } = useWindowSize();

  return (
    <StyledContainer>
      <StyledResumeWrapper>
        <>
          {width < mediaWidthMobile ? (
            <OpenModalButton
              clickHandler={() => window.open(
                'https://kaernvirke.s3.eu-north-1.amazonaws.com/resume/CV_Peter_Hochman.pdf',
              )}
            >
              <div>View my Resume</div>
            </OpenModalButton>
          ) : (
            <OpenModalButton clickHandler={() => handleOpenModal(true)}>
              <div id="resumeButton">View my Resume</div>
            </OpenModalButton>
          )}
        </>
        {children}
      </StyledResumeWrapper>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <StyledModalContent>
          <StyledImage src={resumeImage} alt="Peter Hochman" />
        </StyledModalContent>
      </Modal>
    </StyledContainer>
  );
};

Resume.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Resume;
