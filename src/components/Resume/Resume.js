import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useWindowSize } from "../../hooks/useWindowSize";
import OpenModalButton from "../Modal/OpenModalButton";
import styled from "styled-components";
import resumeImage from "../../assets/images/resumeImage.png";
import "./styles/resume.css";

const StyledContainer = styled.div`
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

const StyledResumeImage = styled.div`
  display: flex;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  left: 0;
  right: 0;
  width: 380px;
  margin: auto;
  height: 200px;
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
        <div className="resume-wrapper">
          {width < mediaWidthMobile ? (
            <a
              id="resumeButton"
              href="https://kaernvirke.s3.eu-north-1.amazonaws.com/resume/resumeImage.png"
              target="_blank"
              rel="noreferrer"
            >
              View my Resume
            </a>
          ) : (
            <OpenModalButton handleClick={() => handleOpenModal(true)}>
              <div id="resumeButton">View my Resume</div>
            </OpenModalButton>
          )}
        </div>
        {props.children}
      </StyledResumeWrapper>
      <StyledResumeImage id="resumeImage">
        <img
          src={resumeImage}
          alt="Peter Hochman"
          style={{
            height: "100%",
            boxShadow: "0 32px 40px -20px rgba(0, 0, 0, 0.25)"
          }}
        />
      </StyledResumeImage>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <StyledModalContent>
          <img
            id="resumeImg"
            src={resumeImage}
            alt="Peter Hochman"
            style={{
              height: "100%",
              border: "2px solid black",
              borderRadius: "3px"
            }}
          />
        </StyledModalContent>
      </Modal>
    </StyledContainer>
  );
};
export default Resume;
