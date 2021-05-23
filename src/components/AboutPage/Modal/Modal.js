import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const StyledOverlay = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;
const StyledModalContainer = styled(motion.div)`
  width: auto;
  height: 80%;
  background-color: #e9f0fb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`;
const StyledCloseButton = styled.svg`
  width: 15px;
  height: auto;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '47%' },
  exit: { top: '-50%' },
};
const Modal = ({ handleClose, children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.background = 'rgba(0, 0, 0, 0.4)';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.background = '#e9f0fb';
    }
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledOverlay
          initial="initial"
          animate="isOpen"
          exit="exit"
          variants={modalVariant}
        >
          <StyledModalContainer id="modalContainer" variants={containerVariant}>
            <button
              type="button"
              id="download"
              onClick={() => window.open(
                'https://kaernvirke.s3.eu-north-1.amazonaws.com/resume/CV_Peter_Hochman.pdf',
              )}
            >
              Enlarge
            </button>
            <StyledCloseButton
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39"
            >
              <title>close</title>
              <line
                x1="19.39"
                y1="19.39"
                x2="1"
                y2="1"
                fill="none"
                stroke="#221e41"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="1"
                y1="19.39"
                x2="19.39"
                y2="1"
                fill="none"
                stroke="#221e41"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </StyledCloseButton>
            {children}
          </StyledModalContainer>
        </StyledOverlay>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
