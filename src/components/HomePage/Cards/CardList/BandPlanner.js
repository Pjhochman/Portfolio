import React, { useContext } from 'react';
import styled from 'styled-components';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import CloseButton from '../../../Buttons/CloseButton';
import { bandPlanner } from '../data/data.json';
import { FadeInRightAnimation, FadeInAnimation } from '../animations';

const StyledLi = styled.li`
  white-space: ${({ whiteSpace }) => whiteSpace};
`;

const BandPlanner = () => {
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
    Button,
  } = useContext(CardItemContext);

  return (
    <>
      <TopContent alignSelf="start">
        {width > mediaWidthMobile ? (
          <>
            <FadeInRightAnimation duration="0.2s">
              <TopTitle>My Own Work</TopTitle>
              <hr />
            </FadeInRightAnimation>

            <FadeInRightAnimation duration="0.4s">
              <TopDescription>Band Planner</TopDescription>
            </FadeInRightAnimation>
          </>
        ) : (
          <>
            {isExpanded && (
              <>
                <TopTitle>My Own Work</TopTitle>
                <hr />
              </>
            )}
            <FadeInRightAnimation duration="0.1s">
              <TopDescription>Band Planner</TopDescription>
            </FadeInRightAnimation>
          </>
        )}
      </TopContent>
      {isExpanded && (
        <>
          <CloseButton color="#e9f0fb" />
          {Object.values(bandPlanner[0].middleCardContent).map(
            (item, index, arr) => (
              <FadeInAnimation key={item.title} duration="1.1s">
                <MiddleContent>
                  <MiddleTitle>{item.title}</MiddleTitle>
                  {arr.length - 1 === index && (
                    <Button
                      type="button"
                      color="true"
                      onClick={() => window.open(
                        `https://${bandPlanner[0].middleCardContent.bottomSection.link}`,
                      )}
                    >
                      {item.link}
                    </Button>
                  )}
                  <MiddleDescription width="320px">
                    {arr.length - 2 === index ? (
                      <>
                        {bandPlanner[0].middleCardContent.middleSection.description.map(
                          (value) => (
                            <StyledLi key={value}>{value}</StyledLi>
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
          <BottomContent margin>
            <BottomTitle>Progressive Web App&nbsp;|</BottomTitle>
            <BottomDescription>&nbsp;Login Credentials</BottomDescription>
          </BottomContent>
        </>
      )}
    </>
  );
};

export default BandPlanner;
