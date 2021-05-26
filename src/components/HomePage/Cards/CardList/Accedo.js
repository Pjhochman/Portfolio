import React, { useContext } from 'react';
import styled from 'styled-components';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import CloseButton from '../../../Buttons/CloseButton';
import { accedo } from '../data/data.json';
import { FadeInAnimation } from '../animations';
import textColor from '../../../../styles/GlobalStyles';

const StyledHr = styled.hr`
  width: 65px;
  border: 0.5px solid ${textColor.primaryBlack};
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
    isExpanded,
    Button,
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent alignSelf="center" textAlign="center" color="true">
        {width > mediaWidthMobile ? (
          <FadeInAnimation duration="0.3s">
            <TopTitle>Previously</TopTitle>
            <StyledHr />

            <TopDescription lineHeight="15px">
              {isExpanded
                       && (
                       <>
                         S. Engineer Intern
                         <br />
                       </>
                       )}
              Accedo.tv
            </TopDescription>
          </FadeInAnimation>
        ) : (
          <>
            {isExpanded ? (
              <FadeInAnimation duration="0.1s">
                <TopTitle>Previously</TopTitle>
                <StyledHr />
                <TopDescription lineHeight="15px">
                  S. Engineer Intern
                  <br />
                  Accedo.tv
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
          <CloseButton color="#221e41" />
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
        </>
      )}
    </>
  );
};

export default Accedo;
