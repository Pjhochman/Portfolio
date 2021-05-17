import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useWindowSize } from "../../../hooks/useWindowSize";
import OpenModalButton from "../Modal/OpenModalButton";
import styled from "styled-components";
import resumeImage from "../../../assets/images/resumeImage.png";
import "./styles/resume.css";

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

const Resume = props => {
  const [isOpen, setToggle] = useState(false);
  const mediaWidthMobile = 637;

  function handleOpenModal(open) {
    setToggle(open);
  }

  const { width } = useWindowSize();

  return (
    <StyledContainer>
      <StyledResumeWrapper>
        <>
          {width < mediaWidthMobile ? (
            <button>View my Resume</button>
          ) : (
            <OpenModalButton clickHandler={() => handleOpenModal(true)}>
              <div id="resumeButton">View my Resume</div>
            </OpenModalButton>
          )}
        </>
        {props.children}
      </StyledResumeWrapper>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <StyledModalContent>
          <StyledImage src={resumeImage} alt="Peter Hochman"></StyledImage>
        </StyledModalContent>
      </Modal>
    </StyledContainer>
  );
};
export default Resume;