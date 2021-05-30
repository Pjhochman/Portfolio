import React, { useContext } from 'react';
import styled from 'styled-components';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import CloseIcon from '../../../Buttons/CloseIcon';
import { accedo } from '../data/data.json';
import { FadeInAnimation } from '../animations';
import textColor from '../../../../styles/GlobalStyles';
import Cubes from '../../../Cubes';
import accedoLogo from '../../../../assets/images/accedo/accedo.webp';
import altAccedo from '../../../../assets/images/accedo/accedo.png';

const StyledFiller = styled.div`
height: 10px;
`;

const StyledHr = styled.hr`
  width: 80px;
  border: 0.5px solid ${textColor.primaryBlack};
  @media (max-width: 637px) {
  width: 57px;
  }
`;

const StyledButton = styled.button`
position: absolute;
top: 20px;
right: 18px;
`;

const StyledLi = styled.li`
  white-space: ${(props) => props.whiteSpace};
`;

const Accedo = () => {
  const mediaWidthMobile = 637;
  const { width } = useWindowSize();

  const {
    TopContent,
    TopTitle,
    TopDescription,
    MiddleContent,
    MiddleTitle,
    MiddleDescription,
    BottomContent,
    BottomTitle,
    BottomDescription,
    isExpanded,
    expandHandler,
    Button,
  } = useContext(CardItemContext);
  return (
    <>
      <TopContent margin={!isExpanded && '52px'} alignSelf={!isExpanded ? 'center' : 'start'} textAlign={!isExpanded ? 'center' : 'start'} color="true">
        {width > mediaWidthMobile ? (
          <FadeInAnimation alignSelf={!isExpanded ? 'center' : 'start'} duration="0.2s">
            <TopTitle>Previously</TopTitle>
            <TopDescription lineHeight="15px">
              <StyledHr />
              Accedo
            </TopDescription>
          </FadeInAnimation>
        ) : (
          <>
            {isExpanded ? (
              <FadeInAnimation duration="3s">
                <TopTitle>Accedo</TopTitle>
                <StyledHr />
                <TopDescription lineHeight="15px">
                  S. Engineer Intern
                </TopDescription>
              </FadeInAnimation>
            ) : (
              <FadeInAnimation duration="0.1s">
                <TopDescription>Accedo</TopDescription>
              </FadeInAnimation>
            )}
          </>
        )}
      </TopContent>

      {isExpanded && (
        <>
          <FadeInAnimation duration="1s">
            <Cubes imageTitle copyright altImage1={altAccedo} image1={accedoLogo} image2={accedoLogo} image3={accedoLogo} image4={accedoLogo} image5={accedoLogo} image6={accedoLogo} marginTop={width > mediaWidthMobile ? '180px' : '28vh'} marginBottom={width > mediaWidthMobile ? '230px' : '55vh'} />
            <StyledFiller />
            <StyledButton type="button" onClick={() => expandHandler(false)}>
              <CloseIcon color="#202020" />
            </StyledButton>
          </FadeInAnimation>
          {Object.values(accedo[0].middleCardContent).map(
            (item, index, arr) => (
              <FadeInAnimation key={item.title} duration="1.1s">
                <MiddleContent color="true">
                  <MiddleTitle>{item.title}</MiddleTitle>
                  {arr.length - 1 === index && (
                    <Button
                      type="button"
                      onClick={() => window.open(
                        `https://${accedo[0].middleCardContent.bottomSection.link}`,
                      )}
                    >
                      {item.link}
                    </Button>
                  )}
                  <MiddleDescription width="360px">
                    {arr.length - 2 === index ? (
                      <>
                        {accedo[0].middleCardContent.middleSection.description.map(
                          (value) => (
                            <StyledLi whiteSpace="nowrap" key={value}>
                              {value}
                            </StyledLi>
                          ),
                        )}
                      </>
                    ) : (
                      <StyledLi>{item.description}</StyledLi>
                    )}
                  </MiddleDescription>
                </MiddleContent>

              </FadeInAnimation>
            ),
          )}
          <BottomContent margin color="true">
            <BottomTitle>SaaS Application&nbsp;|</BottomTitle>
            <BottomDescription>&nbsp;Video Experience</BottomDescription>
          </BottomContent>
        </>
      )}
    </>
  );
};

export default Accedo;
