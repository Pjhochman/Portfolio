import React, { useContext } from 'react';
import styled from 'styled-components';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import { FadeInLeftAnimation, FadeInAnimation } from '../animations';
import { hyperIsland } from '../data/data.json';
import CloseButton from '../../../Buttons/CloseButton';
import textColor from '../../../../styles/GlobalStyles';

const StyledHr = styled.hr`
  border: 0.5px solid ${textColor.primaryBlack};
`;

const HyperIsland = () => {
  const mediaWidthMobile = 637;
  const { width } = useWindowSize();
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
    Button,
  } = useContext(CardItemContext);

  return (
    <>
      {isExpanded && (
        <>
          <BottomContent color="true">
            <BottomTitle>Stockholm&nbsp;|</BottomTitle>
            <BottomDescription>&nbsp;2019–2021</BottomDescription>
          </BottomContent>
          <CloseButton color="#221e41" />
          {Object.values(hyperIsland[0].middleCardContent).map(
            (item, index, arr) => (
              <FadeInAnimation key={item.title} duration="1.1s">
                <MiddleContent color="true">
                  <MiddleTitle>{item.title}</MiddleTitle>
                  {arr.length - 1 === index && (
                    <Button
                      type="button"
                      onClick={() => window.open(
                        `https://${hyperIsland[0].middleCardContent.bottomSection.link}`,
                      )}
                    >
                      {item.linkAlt}
                    </Button>
                  )}
                  <MiddleDescription marginBottom="true">
                    {arr.length - 2 === index ? (
                      <>
                        {
                          hyperIsland[0].middleCardContent.topSection
                            .description
                        }
                      </>
                    ) : (
                      <li>{item.description}</li>
                    )}
                  </MiddleDescription>
                </MiddleContent>
              </FadeInAnimation>
            ),
          )}
        </>
      )}
      <TopContent
        color="true"
        margin={!isExpanded && (width < mediaWidthMobile) ? '15px 6px' : '14px'}
        textAlign={isExpanded ? 'start' : 'end'}
        alignSelf={isExpanded ? 'flex-start' : 'flex-end'}
      >
        {width > mediaWidthMobile ? (
          <>
            <FadeInLeftAnimation duration="0.3s">
              <TopTitle>Education</TopTitle>
              <StyledHr />
            </FadeInLeftAnimation>
            <FadeInLeftAnimation duration="0.5s">
              <TopDescription>Hyper Island</TopDescription>
            </FadeInLeftAnimation>
          </>
        ) : (
          <>
            {isExpanded && (
              <>
                <TopTitle>Hyper Island</TopTitle>
                <StyledHr />
              </>
            )}
            <FadeInLeftAnimation duration="0.1s">
              <TopDescription>Education</TopDescription>
            </FadeInLeftAnimation>
          </>
        )}
      </TopContent>
    </>
  );
};

export default HyperIsland;
