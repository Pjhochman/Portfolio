import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import styled from 'styled-components';
import { CardItemContext } from '../Context/cardContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import CloseIcon from '../../../Buttons/CloseIcon';
import { colorPalette } from '../data/data.json';
import Cubes from '../../../Cubes';
import { FadeInRightAnimation, FadeInAnimation } from '../animations';
import blue from '../../../../assets/images/colorpalette/colorPalette_blue.webp';
import green from '../../../../assets/images/colorpalette/colorPalette_green.webp';
import orange from '../../../../assets/images/colorpalette/colorPalette_orange.webp';
import purple from '../../../../assets/images/colorpalette/colorPalette_purple.webp';
import red from '../../../../assets/images/colorpalette/colorPalette_red.webp';
import violet from '../../../../assets/images/colorpalette/colorPalette_violet.webp';
import paletteAlt from '../../../../assets/images/colorpalette/colorPalette_purple.png';

const StyledFiller = styled.div`
height: 10px;
`;

const StyledButton = styled.button`
position: absolute;
top: 20px;
right: 18px;
`;

const ColorPalette = () => {
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
      <TopContent alignSelf="start" flexDirection="column">
        {width > mediaWidthMobile ? (
          <>
            <FadeInRightAnimation duration="0.2s">
              <TopTitle>My Own Work</TopTitle>
              <hr />
            </FadeInRightAnimation>
            <FadeInRightAnimation duration="0.4s">
              <TopDescription>Color Palette</TopDescription>
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
              <TopDescription>Color Palette</TopDescription>
            </FadeInRightAnimation>
          </>
        )}
      </TopContent>
      {isExpanded && isVisible && (
        <>
          <FadeInAnimation duration="0.5s">
            <Cubes backgroundColor="#3f3f3f" imageTitle="'Application Images'" isVisible={isVisible} altImage1={paletteAlt} image1={blue} image2={green} image3={orange} image4={purple} image5={red} image6={violet} color="true" marginTop={width > mediaWidthMobile ? '180px' : '28vh'} marginBottom="230px" />
            <StyledFiller />
            <StyledButton type="button" onClick={() => expandHandler(false)}>
              <CloseIcon color="#e9f0fb" />
            </StyledButton>
          </FadeInAnimation>
          {Object.values(colorPalette[0].middleCardContent).map(
            (item, index, arr) => (
              <FadeInAnimation key={item.title} duration="0.5s">
                <MiddleContent>
                  <MiddleTitle>{item.title}</MiddleTitle>
                  {arr.length - 1 === index && (
                    <Button
                      type="button"
                      color="true"
                      onClick={() => window.open(
                        `https://${colorPalette[0].middleCardContent.bottomSection.link}`,
                      )}
                    >
                      {item.link}
                    </Button>
                  )}
                  <MiddleDescription width="360px">
                    {arr.length - 2 === index ? (
                      <>
                        {colorPalette[0].middleCardContent.middleSection.description.map(
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
              <BottomTitle>Mobile & Desktop&nbsp;|</BottomTitle>
              <BottomDescription>&nbsp;Interactive Design</BottomDescription>
            </BottomContent>
          </FadeInAnimation>
        </>
      )}
    </>
  );
};

export default ColorPalette;
