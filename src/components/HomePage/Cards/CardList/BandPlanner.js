import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import styled from 'styled-components';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import CloseIcon from '../../../Buttons/CloseIcon';
import { bandPlanner } from '../data/data.json';
import Cubes from '../../../Cubes';
import { FadeInRightAnimation, FadeInAnimation } from '../animations';
import homeDesktop from '../../../../assets/images/bandplanner/home_desktop.webp';
import loginDesktop from '../../../../assets/images/bandplanner/login_desktop.webp';
import homeInfoLight from '../../../../assets/images/bandplanner/homeInfo_light.webp';
import homeInfoDark from '../../../../assets/images/bandplanner/homeInfo_dark.webp';
import addPlaylistDark from '../../../../assets/images/bandplanner/addPlaylist_dark.webp';
import addPlaylistLight from '../../../../assets/images/bandplanner/addPlaylist_light.webp';
import bandAlt from '../../../../assets/images/bandplanner/bandplanner_login_desktop.png';

const StyledFiller = styled.div`
height: 10px;
`;

const StyledLi = styled.li`
  white-space: ${({ whiteSpace }) => whiteSpace};
`;

const StyledButton = styled.button`
position: absolute;
top: 20px;
right: 18px;
`;

const BandPlanner = () => {
  const mediaWidthMobile = 637;
  const [isVisible, setVisible] = useState(false);
  const isMountedRef = useRef(null);
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
      {isExpanded && isVisible && (
        <>
          <FadeInAnimation duration="1s">
            <Cubes isVisible={isVisible} altImage1={bandAlt} image1={homeDesktop} image2={loginDesktop} image3={homeInfoLight} image4={homeInfoDark} image5={addPlaylistDark} image6={addPlaylistLight} color="true" marginTop={width > mediaWidthMobile ? '180px' : '28vh'} marginBottom="230px" />
            <StyledFiller />
            <StyledButton type="button" onClick={() => expandHandler(false)}>
              <CloseIcon color="#e9f0fb" />
            </StyledButton>
          </FadeInAnimation>

          {Object.values(bandPlanner[0].middleCardContent).map(
            (item, index, arr) => (
              <FadeInAnimation key={item.title} duration="1s">
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
          <FadeInAnimation duration="1s">
            <BottomContent margin>
              <BottomTitle textTransform>EMAIL: hello@email.com &nbsp;|</BottomTitle>
              <BottomDescription textTransform>&nbsp;PASSWORD: hello</BottomDescription>
            </BottomContent>
          </FadeInAnimation>
        </>
      )}
    </>
  );
};

export default BandPlanner;
