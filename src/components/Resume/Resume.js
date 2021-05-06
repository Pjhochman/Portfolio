import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useWindowSize } from "../Cards/hooks/useWindowSize";
import OpenModalButton from "../Modal/OpenModalButton";
import styled from "styled-components";
import resumeImage from "../../assets/images/resumeImage.png";

import "./resume.css";

const Container = styled.div`
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

const ResumeWrapper = styled.div`
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

const ResumeImage = styled.div`
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

const ModalContent = styled.div`
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
    <Container>
      <ResumeWrapper>
        <div className="resume-wrapper">
          {width < mediaWidthMobile ? (
            <a
              id="resumeButton"
              href="https://kaernvirke.s3.eu-north-1.amazonaws.com/resume/CV_Peter_Hochman.pdf"
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
      </ResumeWrapper>
      <ResumeImage id="resumeImage">
        <img
          src={resumeImage}
          alt="My Resume"
          style={{
            height: "100%",
            boxShadow: "0 32px 40px -20px rgba(0, 0, 0, 0.25)"
          }}
        />
      </ResumeImage>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <ModalContent>
          <img
            id="resumeImg"
            src={resumeImage}
            alt={"Resume"}
            style={{
              height: "100%",
              border: "2px solid black",
              borderRadius: "3px"
            }}
          />
        </ModalContent>
      </Modal>
    </Container>
  );
};
export default Resume;
