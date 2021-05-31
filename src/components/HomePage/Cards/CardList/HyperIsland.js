import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import styled from 'styled-components';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import { FadeInLeftAnimation, FadeInAnimation } from '../animations';
import { hyperIsland } from '../data/data.json';
import Cubes from '../../../Cubes';
import CloseIcon from '../../../Buttons/CloseIcon';
import textColor from '../../../../styles/GlobalStyles';
import hyper1 from '../../../../assets/images/hyperisland/hyperIsland_black.webp';
import hyper2 from '../../../../assets/images/hyperisland/hyperIsland_green.webp';
import hyper4 from '../../../../assets/images/hyperisland/hyperIsland_pink.webp';
import hyper5 from '../../../../assets/images/hyperisland/hyperIsland_purple.webp';
import hyperAlt from '../../../../assets/images/hyperisland/hyperIsland_black.jpeg';

const StyledHr = styled.hr`
  border: 0.5px solid ${textColor.primaryBlack};
`;

const StyledButton = styled.button`
position: absolute;
top: 20px;
right: 18px;
`;

const HyperIsland = () => {
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
      {isExpanded && isVisible && (
        <>
          <FadeInAnimation duration="1s">
            <BottomContent color="true">
              <BottomTitle>Stockholm&nbsp;|</BottomTitle>
              <BottomDescription>&nbsp;2019–2021</BottomDescription>
            </BottomContent>
          </FadeInAnimation>
          {Object.values(hyperIsland[0].middleCardContent).map(
            (item, index, arr) => (
              <FadeInAnimation key={item.title} duration="0.3s">
                <MiddleContent color="true" margin={width < mediaWidthMobile && '34vh'}>
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
                </MiddleContent>
              </FadeInAnimation>
            ),
          )}
          <FadeInAnimation duration="1s">
            <Cubes isVisible={isVisible} imageTitle copyright altImage1={hyperAlt} image1={hyper1} image2={hyper2} image3={hyper4} image4={hyper2} image5={hyper5} image6={hyper1} absolute marginTop={width > mediaWidthMobile ? '60px' : '17vh'} marginBottom={width > mediaWidthMobile ? '0' : '0'} />
            <StyledButton type="button" onClick={() => expandHandler(false)}>
              <CloseIcon color="#202020" />
            </StyledButton>
          </FadeInAnimation>
        </>
      )}
      <TopContent
        color="true"
        margin={!isExpanded && (width < mediaWidthMobile) ? '15px 6px' : '11px'}
        textAlign={isExpanded ? 'start' : 'end'}
        alignSelf={isExpanded ? 'flex-start' : 'flex-end'}
      >
        {width > mediaWidthMobile ? (
          <>
            <FadeInLeftAnimation duration="0.2s">
              <TopTitle>Education</TopTitle>
              <StyledHr />
            </FadeInLeftAnimation>
            <FadeInLeftAnimation duration="0.4s">
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
