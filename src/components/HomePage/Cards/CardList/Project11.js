import React, { useContext } from 'react';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import { FadeInLeftAnimation, FadeInAnimation } from '../animations';
import { project11 } from '../data/data.json';
import CloseButton from '../../../Buttons/CloseButton';

const Project11 = () => {
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
          <BottomContent>
            <BottomTitle>Desktop&nbsp;|</BottomTitle>
            <BottomDescription>&nbsp;VR experience</BottomDescription>
          </BottomContent>
          <CloseButton />
          {Object.values(project11[0].middleCardContent).map(
            (item, index, arr) => (
              <FadeInAnimation key={item.title} duration="1.1s">
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
        </>
      )}
      <TopContent
        textAlign={isExpanded ? 'start' : 'end'}
        alignSelf={isExpanded ? 'flex-start' : 'flex-end'}
      >
        {width > mediaWidthMobile ? (
          <>
            <FadeInLeftAnimation duration="0.3s">
              <TopTitle>My Own Work</TopTitle>
              <hr />
            </FadeInLeftAnimation>
            <FadeInLeftAnimation duration="0.5s">
              <TopDescription>Project 11</TopDescription>
            </FadeInLeftAnimation>
          </>
        ) : (
          <>
            {isExpanded && (
              <>
                <TopTitle>My Own Work</TopTitle>
                <hr />
              </>
            )}
            <FadeInLeftAnimation duration="0.1s">
              <TopDescription>Project 11</TopDescription>
            </FadeInLeftAnimation>
          </>
        )}
      </TopContent>
    </>
  );
};

export default Project11;
