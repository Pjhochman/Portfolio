import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import styled from 'styled-components';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import { FadeInLeftAnimation, FadeInAnimation } from '../animations';
import { project11 } from '../data/data.json';
import Cubes from '../../../Cubes';
import CloseIcon from '../../../Buttons/CloseIcon';
import project1 from '../../../../assets/images/project11/project1.webp';
import project2 from '../../../../assets/images/project11/project2.webp';
import project3 from '../../../../assets/images/project11/project3.webp';
import project4 from '../../../../assets/images/project11/project4.webp';
import project5 from '../../../../assets/images/project11/project5.webp';
import projectAlt from '../../../../assets/images/project11/projectAlt.png';

const StyledWrapper = styled.div`
position: ${({ isExpanded }) => (isExpanded ? 'relative' : 'absolute')};
bottom: ${({ isExpanded }) => (isExpanded ? null : '15px')};
right: ${({ isExpanded }) => (isExpanded ? null : '15px')};
`;

const StyledFiller = styled.div`
height: 10px;
`;

const StyledButton = styled.button`
position: absolute;
top: 20px;
right: 18px;
`;

const Project11 = () => {
  const mediaWidthMobile = 637;
  const { width } = useWindowSize();
  const [isVisible, setVisible] = useState(false);
  const isMountedRef = useRef(null);
  const {
    TopContent,
    MiddleContent,
    BottomContent,
    TopTitle,
    TopDescription,
    MiddleTitle,
    MiddleDescription,
    BottomTitle,
    BottomDescription,
    isExpanded,
    expandHandler,
    Button,
  } = useContext(CardItemContext);

  useEffect(() => {
    isMountedRef.current = true;
    if (isMountedRef.current && isExpanded) {
      setTimeout(() => {
        setVisible(true);
      }, 200);
    }
    return () => { isMountedRef.current = false; };
  }, [isVisible, isExpanded]);

  return (
    <>
      <TopContent
        textAlign={isExpanded ? 'start' : 'end'}
        alignSelf={isExpanded ? 'flex-start' : 'flex-end'}
      >
        {width > mediaWidthMobile ? (
          <StyledWrapper isExpanded={isExpanded}>
            <FadeInLeftAnimation duration="0.2s">
              <TopTitle>My Own Work</TopTitle>
              <hr />
            </FadeInLeftAnimation>
            <FadeInLeftAnimation duration="0.4s">
              <TopDescription>Project 11</TopDescription>
            </FadeInLeftAnimation>
          </StyledWrapper>
        ) : (
          <StyledWrapper isExpanded={isExpanded}>
            {isExpanded && (
            <>
              <TopTitle>My Own Work</TopTitle>
              <hr />
            </>
            )}
            <FadeInLeftAnimation duration="0.1s">
              <TopDescription>Project 11</TopDescription>
            </FadeInLeftAnimation>
          </StyledWrapper>
        )}
      </TopContent>

      {isExpanded && isVisible && (
      <>
        <FadeInAnimation duration="0.5s">
          <Cubes borderColor="black" backgroundColor="#707070" imageTitle="'VR Images'" isVisible={isVisible} altImage1={projectAlt} image1={project1} image2={project2} image3={project3} image4={project3} image5={project5} image6={project4} color="true" marginTop={width > mediaWidthMobile ? '180px' : '28vh'} marginBottom="230px" />
          <StyledFiller />
          <StyledButton type="button" onClick={() => expandHandler(false)}>
            <CloseIcon color="#e9f0fb" />
          </StyledButton>
        </FadeInAnimation>
        {Object.values(project11[0].middleCardContent).map(
          (item, index, arr) => (
            <FadeInAnimation key={item.title} duration="0.5s">
              <MiddleContent whiteSpace="true">
                <MiddleTitle>{item.title}</MiddleTitle>
                {arr.length - 1 === index && (
                <Button
                  type="button"
                  color="true"
                  onClick={() => window.open(
                    `https://${project11[0].middleCardContent.bottomSection.link}`,
                  )}
                >
                  {item.link}
                </Button>
                )}
                <MiddleDescription width="320px">
                  {arr.length - 2 === index ? (
                    <>
                      {project11[0].middleCardContent.middleSection.description.map(
                        (value) => (
                          <li key={value}>{value}</li>
                        ),
                      )}
                    </>
                  ) : (
                    <li>{item.description}</li>
                  )}
                </MiddleDescription>
              </MiddleContent>
            </FadeInAnimation>
          ),
        )}
        <FadeInAnimation duration="0.5s">
          <BottomContent>
            <BottomTitle>Desktop&nbsp;|</BottomTitle>
            <BottomDescription>&nbsp;VR experience</BottomDescription>
          </BottomContent>
        </FadeInAnimation>
      </>
      )}
    </>
  );
};

export default Project11;
