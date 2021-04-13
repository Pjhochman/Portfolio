import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import OpenModalButton from "../Modal/OpenModalButton";
import styled from "styled-components";
import resumeImage from "../../assets/images/resumeImage.png";

import "../../styles/css/resume.css";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  height: 200px;
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
  height: 200px;
`;

const ResumeImage = styled.div`
  display: flex;
  visibility: hidden;
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
  const [isVisible, setVisible] = React.useState(false);
  const [isOpen, setToggle] = useState(false);

  function handleOpenModal(open) {
    setToggle(open);
  }

  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <Container
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <ResumeWrapper>
        <div className="resume-wrapper">
          <OpenModalButton handleClick={() => handleOpenModal(true)}>
            <div id="resumeButton">View my Resume</div>
          </OpenModalButton>
        </div>
        {props.children}
      </ResumeWrapper>
      <ResumeImage>
        <img
          src={resumeImage}
          alt="Logo"
          style={{
            height: "100%",
            boxShadow: "0 32px 40px -20px rgba(0, 0, 0, 0.25)"
          }}
        />
      </ResumeImage>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <ModalContent>
          <h1>Resume</h1>
        </ModalContent>
      </Modal>
    </Container>
  );
};
export default Resume;
